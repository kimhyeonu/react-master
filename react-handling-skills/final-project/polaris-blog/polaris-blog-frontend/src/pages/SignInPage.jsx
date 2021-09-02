import React from 'react';

import AuthLayout from '../components/layouts/AuthLayout';
import SignInForm from '../containers/SignInForm';

const SignInPage = () => {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignInPage;
