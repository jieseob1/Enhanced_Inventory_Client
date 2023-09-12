import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import Form from '../../components/Form';
import FormLayout from '../../components/FormLayout';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

// 회원가입 데이터의 타입을 정의
interface SignupData {
  userPassword: string;
  email: string;
  memo?: string;
  company?: string;
}

// 회원가입 API 호출 함수
const signup = async (data: SignupData) => {
  const response = await axios.post('/api/signup', data);
  return response.data;
};

const SignupPage: React.FC = () => {
  const [userPassword, setUserPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [memo, setMemo] = useState<string>('');
  const [company, setCompany] = useState<string>('');

  // react-query의 useMutation 훅
  const mutation = useMutation(signup, {
    onSuccess: (data) => {
      // 성공 시 추가 작업 (예: 로그인 페이지로 리다이렉트)
    },
  });

  // 폼 제출 핸들러
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ userPassword, email, memo, company });
  };
  //Todo. Change Later
  const handleEmailChange = (value: string, id: string) => {
    setEmail(value);
  };
  
  const handlePasswordChange = (value: string, id: string) => {
    setUserPassword(value);
  };
  
  const handleMemoChange = (value: string, id: string) => {
    setMemo(value);
  };
  
  const handleCompanyChange = (value: string, id: string) => {
    setCompany(value);
  };
  return (
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
          value={userPassword}
          onChange={handlePasswordChange}
          autoComplete="password"
        />
        <TextField
          label="Memo"
          value={memo}
          onChange={handleMemoChange}
          autoComplete="memo"
        />
        <TextField
          label="Company"
          value={company}
          onChange={handleCompanyChange}
          autoComplete="company"
        />
        <Button submit disabled={mutation.isLoading}>
          Sign Up
        </Button>
      </FormLayout>
    </Form>
  );
};

export default SignupPage;