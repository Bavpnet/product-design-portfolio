import React from 'react';
import './ProjectMainImage.css';

const ProjectMainImage = ({ imageUrl, altText }) => {
  return (
    <div className="project-main-image-container">
      <img src={imageUrl} alt={altText} className="project-main-image" />
    </div>
  );
};

export default ProjectMainImage;
