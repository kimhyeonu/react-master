import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: ${({ invalid }) => (invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    padding: 0 0.25rem;
    width: 100%;
    border: 1px solid ${({ invalid }) => (invalid ? 'red' : '#ccc')};
    background-color: ${({ invalid }) => (invalid ? 'salmon' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #8b005d;
    background-color: #fad0ec;
  }
`;

function CourseInput({ onAddGoal }) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const changeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    onAddGoal(enteredValue);

    setEnteredValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={changeHandler} />
      </FormControl>

      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
