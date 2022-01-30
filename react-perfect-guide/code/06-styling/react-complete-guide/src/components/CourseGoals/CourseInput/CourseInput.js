import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

function CourseInput({ onAddGoal }) {
  const [enteredValue, setEnteredValue] = useState('');

  const changeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={changeHandler} />
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
