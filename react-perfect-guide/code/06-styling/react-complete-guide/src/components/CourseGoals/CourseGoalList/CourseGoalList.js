import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

function CourseGoalList({ goals, onRemoveGoal }) {
  return (
    <ul className="goal-list">
      {goals.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onRemoveGoal={onRemoveGoal}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
}

export default CourseGoalList;
