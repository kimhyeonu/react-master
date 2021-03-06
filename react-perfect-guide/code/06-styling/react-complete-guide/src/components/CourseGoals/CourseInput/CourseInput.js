import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

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
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={changeHandler} />
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
