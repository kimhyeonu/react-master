import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import palette from '../lib/styles/palette';
import Button from './common/Button';

const Block = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 1rem;
    color: ${palette.gray[8]};
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px soild ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const Tail = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const formTitleMap = {
  signIn: '서비스 접속',
  signUp: '서비스 가입',
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const formTitle = formTitleMap[type];

  return (
    <Block>
      <h3>{formTitle}</h3>

      <form onSubmit={onSubmit}>
        <StyledInput
          type="text"
          autoComplete="username"
          name="username"
          placeholder="Username"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          type="password"
          autoComplete="new-password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'signUp' && (
          <StyledInput
            type="password"
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="Password Confirm"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonWithMarginTop fullWidth cyan>
          {formTitle}
        </ButtonWithMarginTop>
      </form>

      <Tail>
        {type === 'signIn' ? (
          <Link to="sign-up">가입</Link>
        ) : (
          <Link to="sign-in">접속</Link>
        )}
      </Tail>
    </Block>
  );
};

export default AuthForm;
