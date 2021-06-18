import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import classes from './AddUser.module.css';

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const isValidInput = (username, age) => {
    // Handling Empty Inputs
    if (username.trim().length === 0 || age.trim().length === 0) return false;
    // Handling correct Ages
    if (+age <= 0) return false;

    return true;
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (isValidInput(enteredUsername, enteredAge)) {
      console.log(enteredUsername, enteredAge);
      setEnteredUsername('');
      setEnteredAge('');
    }
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        {/* The value attribute is used for 'double-binding' */}
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age (In Years)</label>
        {/* The value attribute is used for 'double-binding' */}
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
