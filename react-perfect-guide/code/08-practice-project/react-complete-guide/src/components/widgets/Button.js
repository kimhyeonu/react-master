import React from 'react';

import classes from './Button.module.css';

export default function Button({
  type = 'button',
  onClick = () => {},
  children,
}) {
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
