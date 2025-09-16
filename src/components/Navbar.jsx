import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="https://t.me/KMnSO4">Telegram</a>
      <span>|</span>
      <a href="aleksandrachupkova@gmail.com">Mail</a>
      <span>|</span>
      <a href="#">Portfolio</a>
      <span>|</span>
      <a href="#">CV</a>
    </nav>
  );
};

export default Navbar;
