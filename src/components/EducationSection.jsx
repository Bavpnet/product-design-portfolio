import React from 'react';
import './EducationSection.css';
import EducationCard from './EducationCard';

const educationData = [
  {
    id: 1,
    university: 'Университет Иннополис',
    years: '2021 – 2025',
    degree: 'Информатика и вычислительная техника',
  },
];

const EducationSection = () => {
  return (
    <section className="education-section">
      <div className="education-sidebar">
        <h2 className="education-section-title">Образование</h2>
      </div>
      <div className="education-content">
        {educationData.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
