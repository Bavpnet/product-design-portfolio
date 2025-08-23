import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className='main-info-company'>
      <h3 className="company-title">
        {experience.company} <div className="vector-square"></div> {experience.role} <div className="vector-square"></div> {experience.years}
      </h3>
      <p className="company-description">{experience.description}</p>
      </div>
      
      
      <div className= 'lists'>
      <h4>Обязанности</h4>
      <ul className="responsibilities">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      </div>

      
      <div className= 'lists'>
      <h4>Продукты компании</h4>
      <div className="products-list">
        {experience.products.map((product, index) => (
          <div key={index} className="product-item">
            <p><strong>{product.name}</strong> — {product.description}</p>
          </div>
        ))}
      </div>  
      </div>
    </div>
  );
};

export default ExperienceCard;
