import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PortfolioCard.css';

const PortfolioCard = ({ project, accentColor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div className="portfolio-card" onClick={handleClick}>
      <div className="portfolio-card-image-container">
        <div className="aspect-ratio-box">
          <img src={project.image} alt={project.name} className="card-image" />
        </div>
      </div>
      <div className="portfolio-card-info-container">
        <p className="project-title-line">
          <span className="project-name-bold">{project.name}</span>
          <span className="project-description-text">{project.description.text1}</span> <div className="vector-square-secondary" style={{ backgroundColor: accentColor }}></div>
          <span className="project-description-text">{project.description.text2}</span>
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
