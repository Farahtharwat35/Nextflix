import React, { useState } from 'react';
import axios from 'axios';

const AccountsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [subscription, setSubscription] = useState('');
  const [type, setType] = useState('');

  const handleAddAccount = async (e) => {
    e.preventDefault();
    
    try {
      const accountData = {
        name,
        email,
        password,
        phoneNo,
        subscription,
        type
      };

      const response = await axios.post('/api/accounts', accountData);
      
      // Handle the response from the backend
      console.log(response.data); // Assuming the backend returns the created account

      // Reset the form fields
      setName('');
      setEmail('');
      setPassword('');
      setPhoneNo('');
      setSubscription('');
      setType('');

    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <h1>Manage Accounts</h1>
      <form onSubmit={handleAddAccount}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone No"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <select
          value={subscription}
          onChange={(e) => setSubscription(e.target.value)}
        >
          <option value="" disabled>Select Subscription</option>
          <option value="Normal">Normal</option>
          <option value="Platinum">Platinum</option>
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="" disabled>Select Type</option>
          <option value="Watcher">Watcher</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">Add Account</button>
      </form>
    </div>
  );
};

export default AccountsPage;