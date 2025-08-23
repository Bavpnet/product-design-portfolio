import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#">Telegram</a>
      <span>|</span>
      <a href="#">Mail</a>
      <span>|</span>
      <a href="#">Portfolio</a>
      <span>|</span>
      <a href="#">CV</a>
    </nav>
  );
};

export default Navbar;
