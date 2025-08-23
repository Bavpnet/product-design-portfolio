import React, { useState } from 'react';
import './PortfolioCard.css';

const PortfolioCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="portfolio-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="card-overlay">
          <h3 className="project-name">{project.name}</h3>
          <div className="project-description">
            <p>{project.description.text1}</p>
            <div className="vector-square"></div>
            <p>{project.description.text2}</p>
          </div>
        </div>
      ) : (
        <img src={project.image} alt={project.name} className="card-image" />
      )}
    </div>
  );
};

export default PortfolioCard;
