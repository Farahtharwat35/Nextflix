import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        name
      };

      const response = await axios.post('/api/users', newUser);
      setUsers(prevUsers => [...prevUsers, response.data]);

      setName('');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleRemoveUser = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
        <button type="submit">Add User</button>
      </form>

      {users.map(user => (
        <div key={user._id}>
          <span>{user.name}</span>
          <button onClick={() => handleRemoveUser(user._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;