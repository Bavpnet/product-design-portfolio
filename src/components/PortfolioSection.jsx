import React from 'react';
import './PortfolioSection.css';
import PortfolioCard from './PortfolioCard';

const projects = [
  [
    {
      id: 'sagaBI',
      name: 'SAGA BI',
      image: 'https://via.placeholder.com/300',
      description: { text1: 'Web app', text2: '2024 – 2025' },
      accentColor: '#007BFF', // Placeholder color
    },
  ],
  [
    {
      id: 'teamforce360',
      name: 'Teamforce 360 — redesign',
      image: '/teamforce.png',
      description: { text1: 'Mobile app', text2: '2023'},
      accentColor: '#F15929', // Specific color for Teamforce 360
    },
    {
      id: 'energo',
      name: 'Энергоучет',
      image: '/energo.png',
      description: { text1: 'Web app', text2: '2024 – 2025'},
      accentColor: '#28A745', // Placeholder color
    },
  ],
];

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Портфолио</h2>
        <a href="#" className="all-projects-link">Все проекты</a>
      </div>
      <div className="portfolio-grid">
        {projects.map((column, colIndex) => (
          <div key={colIndex} className="portfolio-column">
            {column.map((project) => (
              <PortfolioCard key={project.id} project={project} accentColor={project.accentColor} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
