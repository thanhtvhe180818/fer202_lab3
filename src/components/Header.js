import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">[ ProductStore ]</div>
      <nav>
        <Link to="/">[ Home ]</Link>
        <Link to="/products">[ Products ]</Link>
      </nav>
    </header>
  );
};

export default Header;