import React from 'react';
import classes from './Button.module.css';

const Button = ({ type, onClick, children }) => {
  const buttonType = type || 'button';
  return (
    <button type={buttonType} className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
