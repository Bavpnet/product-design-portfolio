import React from 'react';
import './ProjectHero.css';

const ProjectHero = ({ title, status,type, time, intro }) => {
  return (
    <div className="project-hero-section">
      <div className="project-hero-content">
        <h1 className="project-hero-title">
          {title}
        </h1>
        <div className="project-hero-description">
          <p className='parameter'>{status}</p>   
          <div className="vector-square-secondary"></div>      
          <p className='parameter'>{type}</p>  
          <div className="vector-square-secondary"></div>        
          <p className='parameter' >{time}</p>
        </div>
        <p className="project-hero-intro">
          {intro}
        </p>
      </div>
    </div>
  );
};

export default ProjectHero;
