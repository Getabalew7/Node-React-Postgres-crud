import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:5000/api/users');
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>CRUD App</h1>
      <UserForm fetchUsers={fetchUsers} />
      <UserList users={users} fetchUsers={fetchUsers} />
    </div>
  );
};

export default App;