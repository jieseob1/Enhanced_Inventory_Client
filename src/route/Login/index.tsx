import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

import Form from '../../components/Form';
import FormLayout from '../../components/FormLayout';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

interface Credentials {
  email: string;
  password: string;
}

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
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        {/* <TextField />
        <TextField /> */}
        <Button disabled={mutation.isLoading}>Login</button>
        {/* {mutation.isError ? <div>An error occurred: {mutation.error.message}</div> : null} */}
      </FormLayout>
    </Form>
  );
};

export default LoginPage;