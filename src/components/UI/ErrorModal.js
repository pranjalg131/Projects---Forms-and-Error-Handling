import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = ({ onConfirm }) => (
  <div
    className={classes.backdrop}
    onClick={onConfirm}
    onKeyDown={onConfirm}
    aria-hidden="true"
  />
);

const Overlay = ({ title, message, onConfirm }) => (
  <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{title}</h2>
    </header>
    <div className={classes.content}>
      <p>{message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={onConfirm}> Okay </Button>
    </footer>
  </Card>
);

const ErrorModal = ({ title, message, onConfirm }) => (
  <>
    {/* This allows the backdrop and overlay to be at the top of the component tree, which is semantically more correct. */}
    {ReactDOM.createPortal(
      <Backdrop onConfirm={onConfirm} />,
      document.getElementById('backdrop-root')
    )}
    {ReactDOM.createPortal(
      <Overlay title={title} message={message} onConfirm={onConfirm} />,
      document.getElementById('overlay-root')
    )}
  </>
);

export default ErrorModal;
