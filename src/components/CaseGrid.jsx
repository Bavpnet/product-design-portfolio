import React from 'react';
import './CaseGrid.css';

const CaseGrid = ({ caseItems, onImageClick }) => {
  return (
    <div className="case-grid-section">
      <div className="case-grid-container">
        {caseItems.map((item) => (
          <div key={item.id} className="case-grid-item" onClick={() => onImageClick(item.image)}>
            <img src={item.image} alt={item.title} className="case-item-image" />
            <p className="case-item-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseGrid;
