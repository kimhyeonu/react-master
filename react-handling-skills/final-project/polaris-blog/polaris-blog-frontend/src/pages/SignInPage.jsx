import React from 'react';

import AuthLayout from '../components/layouts/AuthLayout';
import AuthForm from '../components/AuthForm';

const SignInPage = () => {
  return (
    <AuthLayout>
      <AuthForm type="signIn" />
    </AuthLayout>
  );
};

export default SignInPage;
