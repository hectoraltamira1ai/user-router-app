// src/UserDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from './data';

const UserDetail = () => {
  const { id } = useParams();
  const user = users.find(currentUser => currentUser.id === Number(id));

  return (
    <div>
      {user ? (
        <h2>User ID: {user.id}</h2>
      ) : (
        <h2>User not found!</h2>
      )}
    </div>
  );
};

export default UserDetail;