import React from 'react';

import styles from './Button.module.css';

function Button({ type, onClick, children }) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
