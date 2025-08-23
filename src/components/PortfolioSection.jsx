import React from 'react';
import './PortfolioSection.css';
import PortfolioCard from './PortfolioCard';

const projects = [
  {
    id: 1,
    name: 'Project One',
    image: 'https://via.placeholder.com/300',
    description: { text1: 'Description 1', text2: 'Detail 1' },
  },
  {
    id: 2,
    name: 'Project Two',
    image: 'https://via.placeholder.com/300',
    description: { text1: 'Description 2', text2: 'Detail 2' },
  },
  {
    id: 3,
    name: 'Project Three',
    image: 'https://via.placeholder.com/300',
    description: { text1: 'Description 3', text2: 'Detail 3' },
  },
  {
    id: 4,
    name: 'Project Four',
    image: 'https://via.placeholder.com/300',
    description: { text1: 'Description 4', text2: 'Detail 4' },
  },
];

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <descriptor className="portfolio-title">Портфолио</descriptor>
        <a href="#" className="all-projects-link">Все проекты</a>
      </div>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
