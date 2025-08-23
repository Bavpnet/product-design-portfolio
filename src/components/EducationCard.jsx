import React from 'react';
import './EducationCard.css';

const EducationCard = ({ education }) => {
  return (
    <div className="education-card">
      <h3 className="university-info">
        {education.university} <div className="vector-square"></div> {education.years}
      </h3>
      <p className="degree-info">{education.degree}</p>
    </div>
  );
};

export default EducationCard;
