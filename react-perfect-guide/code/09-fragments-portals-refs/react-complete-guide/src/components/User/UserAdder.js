import React, { useRef } from 'react';

import Card from '../widgets/Card';
import Button from '../widgets/Button';

import classes from './UserAdder.module.css';

export default function UserAdder({
  setError = () => {},
  onAddUser = () => {},
}) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //* true -> valid
  //* false -> invalid
  const validateForm = (name, age) => {
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: '유효하지 않은 입력',
        message: '잘못된 값을 입력하였습니다. 올바른 값을 입력해 주세요.',
      });
      return false;
    }

    if (parseInt(age, 10) < 1) {
      setError({
        title: '유효하지 않은 나이',
        message:
          '잘못된 값을 입력하였습니다. 나이는 양의 정수 값을 입력해 주세요.',
      });
      return false;
    }

    return true;
  };

  const clearForm = () => {
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (!validateForm(name, age)) {
      return;
    }

    onAddUser(name, age);

    clearForm();
  };

  return (
    <Card className={classes.userAdder}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">이름</label>
        <input ref={nameInputRef} id="name" type="text" />

        <label htmlFor="age">나이</label>
        <input ref={ageInputRef} id="age" type="number" />

        <Button type="submit">사용자 추가</Button>
      </form>
    </Card>
  );
}
