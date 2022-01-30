import React, { useState } from 'react';

import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import './App.css';

const DUMMY_COURCE_GOALS = [
  { text: 'Do all exercises!', id: 'g1' },
  { text: 'Finish the course!', id: 'g2' },
];

function App() {
  const [courseGoals, setCourseGoals] = useState(DUMMY_COURCE_GOALS);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        text: enteredText,
        id: Math.random().toString(),
      });
      return updatedGoals;
    });
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList goals={courseGoals} onRemoveGoal={removeGoalHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>

      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
