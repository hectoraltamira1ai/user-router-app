// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { users } from './data';
import UserDetail from './UserDetail';

const App = () => {
  return (
    <Router>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

// HomePage component to display all users
const HomePage = () => {
  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;