import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/sample">sample context</Link>
      <Link to="/todo">todo context</Link>
    </div>
  );
};

export default MainPage;
