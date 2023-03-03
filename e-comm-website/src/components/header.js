import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="heading">MockStore</div>
      <div className="nav-bar-wrapper">
        <Link className="home-link" to="/">
          Home
        </Link>
        <Link className="store-link" to="/store">
          Store
        </Link>
        <Link className="contact-link" to="/contact">
          Contact
        </Link>
        <Link className="cart-link" to="/cart">
          🛒
        </Link>
      </div>
    </>
  );
};

export default Header;
