import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

import Form from '../../components/Form';
import FormLayout from '../../components/FormLayout';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import styled from 'styled-components';
import Box from '../../components/Box';
import Divider from '../../components/Divider';
interface Credentials {
  email: string;
  password: string;
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;
const LoginSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const LoginBox = styled.div`
  display: flex;
  align-items: center;
  height: 300px;
  background-color: #f1f1f1;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const login = async (credentials: Credentials) => {
  const response = await axios.post('/api/login', credentials);
  return response.data;
};

const LoginPage = () => {
  const queryClient = useQueryClient(); // cache value
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
      // save token, redirect
      // localStorage.setItem('token', data.token);
      // 리다이렉트 로직, 예를 들면:
      // history.push('/dashboard');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);  
  };
  const handlePasswordChange = (value: string) => {
    setPassword(value);  
  };
  return (
    <Root>
      <LoginSection>
        <LoginBox>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField
                label="Email"
                value={email}
                onChange={handleEmailChange}
                autoComplete="email"
              />
              <TextField
                label="Password"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="password"
              />
              <Button 
                submit
                disabled={mutation.isLoading}
              >
                Login
              </Button>
              {/* {mutation.isError ? <div>An error occurred: {mutation.error.message}</div> : null} */}
            </FormLayout>
          </Form>
        </LoginBox>
      </LoginSection>
    </Root>
  );
};

export default LoginPage;