import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
      }}
    >
      <div>
        <h1 style={{ fontSize: '4rem', color: '#ff6347' }}>404</h1>
        <p style={{ fontSize: '1.5rem', color: '#333' }}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" style={{ fontSize: '1.2rem', color: '#1e90ff' }}>
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
