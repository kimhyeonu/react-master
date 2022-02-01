import React from 'react';

import classes from './Card.module.css';

export default function Card({ className, children }) {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
}
