import React from 'react';
import './ProjectHero.css';

const ProjectHero = ({ title, subtitle, intro }) => {
  return (
    <div className="project-hero-section">
      <div className="project-hero-content">
        <h1 className="project-hero-title">
          {title}
        </h1>
        <p className="project-hero-description">
          {subtitle}
        </p>
        <p className="project-hero-intro">
          {intro}
        </p>
      </div>
    </div>
  );
};

export default ProjectHero;
