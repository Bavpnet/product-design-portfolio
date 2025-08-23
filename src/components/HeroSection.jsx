import React from 'react';
import './HeroSection.css';
// import Navbar from './Navbar'; // Removed from here

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Navbar was here, now moved to App.jsx */}
      <div className="content">
        <img src="/profile.png" alt="Profile" className="profile-photo" />
        <h1 className="hero-title">
          Привет! Я Саша, продуктовый дизайнер с опытом создания интерфейсов для веб и мобильных платформ
        </h1>
        <p className="hero-description">
          Работала со сложными продуктами: BI-платформы, сервисы и внутренние инструменты. Люблю разбираться в болях людей и создавать дизайн, который действительно приносит пользу.
        </p>
        
      </div>
    </div>
  );
};

export default HeroSection;
