import React, { useRef, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = ({ onSuccess }) => {
  const [errorState, setErrorState] = useState();

  // Using Ref's to get user input.

  const usernameInput = useRef();
  const ageInput = useRef();

  const isValidInput = (username, age) => {
    // Handling Empty Inputs

    if (username.trim().length === 0 || age.trim().length === 0) {
      setErrorState({
        title: 'Invalid Inputs',
        message: 'Please enter valid username and age',
      });
      return false;
    }

    // Handling correct Ages

    if (+age <= 0) {
      setErrorState({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0)',
      });
      return false;
    }

    return true;
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    // On submission only, the input is read and not on every keystroke.

    const username = usernameInput.current.value;
    const age = ageInput.current.value;
    if (isValidInput(username, age)) {
      onSuccess(username, age);

      // Technically ref's should not be used to modify the DOM element , but in this case its okay as we are only clearing the fields.

      usernameInput.current.value = '';
      ageInput.current.value = '';
    }
  };

  const errorHandler = () => {
    setErrorState(null);
  };

  return (
    <>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          {/* The value attribute is used for 'double-binding' */}
          <input id="username" type="text" ref={usernameInput} />
          <label htmlFor="age">Age (In Years)</label>
          {/* The value attribute is used for 'double-binding' */}
          <input id="age" type="number" ref={ageInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
