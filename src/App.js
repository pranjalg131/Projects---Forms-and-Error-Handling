import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (username, age) => {
    const user = { id: Math.random(), name: username, age };
    setUsers((prevState) => [user, ...prevState]);
  };

  return (
    <div>
      <AddUser onSuccess={addUser} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
