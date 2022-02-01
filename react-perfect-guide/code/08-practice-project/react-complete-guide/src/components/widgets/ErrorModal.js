import React from 'react';

import Card from './Card';
import Button from './Button';

import classes from './ErrorModal.module.css';

export default function ErrorModal({
  title = '오류 발생',
  message = '오류가 발생했습니다.',
  onConfirmError = () => {},
}) {
  return (
    <div>
      <div className={classes.backdrop} onClick={onConfirmError} />

      <Card className={classes.errorModal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>

        <main className={classes.main}>
          <p>{message}</p>
        </main>

        <footer className={classes.footer}>
          <Button onClick={onConfirmError}>확인</Button>
        </footer>
      </Card>
    </div>
  );
}
