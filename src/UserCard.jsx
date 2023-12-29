// src/UserCard.js
import React from 'react';

const UserCard = ({ users }) => {
  return (
    <div className="user-card">
      <img src={users.picture} alt={users.name} />
      <h2>{users.name}</h2>
      <p>Email: {users.email}</p>
      <p>Phone: {users.phone}</p>
    </div>
  );
};

export default UserCard;
