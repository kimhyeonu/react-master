import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeField, initForm } from '../modules/auth';
import AuthForm from '../components/AuthForm';

const SignInForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.signIn,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signIn',
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initForm('signIn'));
  }, [dispatch]);

  return (
    <AuthForm
      type="signIn"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignInForm;
