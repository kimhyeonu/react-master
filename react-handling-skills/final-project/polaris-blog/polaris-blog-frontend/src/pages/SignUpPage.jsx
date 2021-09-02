import React from 'react';

import AuthLayout from '../components/layouts/AuthLayout';
import SignUpForm from '../containers/SignUpForm';

const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;
