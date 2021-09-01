import React from 'react';

import AuthLayout from '../components/layouts/AuthLayout';
import AuthForm from '../components/AuthForm';

const SignUpPage = () => {
  return (
    <AuthLayout>
      <AuthForm type="signUp" />
    </AuthLayout>
  );
};

export default SignUpPage;
