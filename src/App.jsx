// src/App.jsx
import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const App = () => {
  const [users, setUser] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const handleRefresh = () => {
    fetchUser();
    setBackgroundColor(getRandomColor());
  };

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="app" style={{ backgroundColor }}>
      <h1>Random User </h1>
      {users && <UserCard users={users} />}
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default App;
