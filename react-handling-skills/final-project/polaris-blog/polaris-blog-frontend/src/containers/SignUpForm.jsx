import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeField, initForm } from '../modules/auth';
import AuthForm from '../components/AuthForm';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.signUp,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signUp',
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initForm('signUp'));
  }, [dispatch]);

  return (
    <AuthForm
      type="signUp"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpForm;
