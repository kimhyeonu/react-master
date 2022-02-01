import React, { useState } from 'react';

import Card from '../widgets/Card';
import Button from '../widgets/Button';

import classes from './UserAdder.module.css';

export default function UserAdder({
  setError = () => {},
  onAddUser = () => {},
}) {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  //* true -> valid
  //* false -> invalid
  const validateForm = () => {
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: '유효하지 않은 입력',
        message: '잘못된 값을 입력하였습니다. 올바른 값을 입력해 주세요.',
      });
      return false;
    }

    if (parseInt(enteredAge, 10) < 1) {
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
    setEnteredName('');
    setEnteredAge('');
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    onAddUser(enteredName, enteredAge);

    clearForm();
  };

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.userAdder}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          value={enteredName}
          onChange={changeNameHandler}
        />

        <label htmlFor="age">나이</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={changeAgeHandler}
        />

        <Button type="submit">사용자 추가</Button>
      </form>
    </Card>
  );
}
