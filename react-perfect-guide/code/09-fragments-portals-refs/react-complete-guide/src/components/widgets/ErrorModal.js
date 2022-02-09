import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';

import classes from './ErrorModal.module.css';

const Backdrop = ({ onConfirmError }) => {
  return <div className={classes.backdrop} onClick={onConfirmError} />;
};

const ModalOverlay = ({ title, message, onConfirmError }) => {
  return (
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
  );
};

export default function ErrorModal({
  title = '오류 발생',
  message = '오류가 발생했습니다.',
  onConfirmError = () => {},
}) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirmError={onConfirmError} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onConfirmError={onConfirmError}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
}
