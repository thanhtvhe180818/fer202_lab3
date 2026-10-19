import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to ProductStore</h1>
      <p>Manage and explore products for your needs.</p>
      <button onClick={() => navigate('/products')}>
        [ View Products ]
      </button>
    </div>
  );
};

export default Home;