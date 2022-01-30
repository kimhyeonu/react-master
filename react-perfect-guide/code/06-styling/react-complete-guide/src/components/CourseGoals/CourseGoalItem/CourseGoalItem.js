import React from 'react';

import './CourseGoalItem.css';

function CourseGoalItem({ id, onRemoveGoal, children }) {
  const clickHandler = () => {
    onRemoveGoal(id);
  };

  return (
    <li className="goal-item" onClick={clickHandler}>
      {children}
    </li>
  );
}

export default CourseGoalItem;
