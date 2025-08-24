import React from 'react';
import './PortfolioSection.css';
import PortfolioCard from './PortfolioCard';

const projects = [
  [
    {
      id: 1,
      name: 'SAGA BI',
      image: 'https://via.placeholder.com/300',
      description: { text1: 'Web app', text2: '2024 – 2025' },
    },
  ],
  [
    {
      id: 2,
      name: 'Teamforce 360 — redesign',
      image: '/teamforce.png',
      description: { text1: 'Mobile app', text2: '2023'},
    },
    {
      id: 3,
      name: 'Энергоучет',
      image: 'https://via.placeholder.com/300',
      description: { text1: 'Web app', text2: '2024 – 2025'},
    },
  ],
];

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <descriptor className="portfolio-title">Портфолио</descriptor>
        <a href="#" className="all-projects-link">Все проекты</a>
      </div>
      <div className="portfolio-grid">
        {projects.map((column, colIndex) => (
          <div key={colIndex} className="portfolio-column">
            {column.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
