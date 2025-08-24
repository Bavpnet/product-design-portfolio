import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ introduction, tasks, research, analysis, sidebarTitle, onAnalysisImageClick }) => {
  return (
    <div className="project-details-section">
      {sidebarTitle && (
        <div className="project-details-sidebar">
          <h2 className="project-details-sidebar-title">{sidebarTitle}</h2>
        </div>
      )}
      {introduction && (
        <div className="project-detail-block">
          <h3 className="project-detail-title">{introduction.title}</h3>
          {introduction.paragraphs.map((paragraph, index) => (
            <p key={index} className="project-detail-paragraph">{paragraph}</p>
          ))}
        </div>
      )}

      {tasks && (
        <div className="project-detail-block">
          <h3 className="project-detail-title">{tasks.title}</h3>
          <ul className="project-detail-list">
            {tasks.list.map((item, index) => (
              <li key={index} className="project-detail-list-item">{item}</li>
            ))}
          </ul>
        </div>
      )}

      {research && (
        <div className="project-detail-block">
          <h3 className="project-detail-title">{research.title}</h3>
          {research.paragraphs.map((paragraph, index) => (
            <p key={index} className="project-detail-paragraph">{paragraph}</p>
          ))}
          <ul className="project-detail-list">
            {research.list.map((item, index) => (
              <li key={index} className="project-detail-list-item">{item}</li>
            ))}
          </ul>
        </div>
      )}

      {analysis && (
        <div className="project-detail-block analysis-block-with-content">
          <h3 className="project-detail-title">{analysis.title}</h3>
          {analysis.paragraphs.map((paragraph, index) => (
            <p key={index} className="project-detail-paragraph">{paragraph}</p>
          ))}
          <ul className="project-detail-list">
            {analysis.list.map((item, index) => (
              <li key={index} className="project-detail-list-item">{item}</li>
            ))}
          </ul>
          {analysis.image && (
            <div className="analysis-image-container-with-description">
              <img
                src={analysis.image}
                alt="Analysis Structure"
                className="analysis-image"
                onClick={() => onAnalysisImageClick(analysis.image)}
                style={{ cursor: 'pointer' }}
              />
              {analysis.imageDescription && (
                <p className="analysis-image-description">{analysis.imageDescription}</p>
              )}
            </div>
          )}
          {analysis.additionalText && (
            <p className="project-detail-paragraph analysis-additional-text">{analysis.additionalText}</p>
          )}
          {analysis.additionalList && (
            <ul className="project-detail-list analysis-additional-list">
              {analysis.additionalList.map((item, index) => (
                <li key={index} className="project-detail-list-item">{item}</li>
              ))}
            </ul>
          )}
          {analysis.secondAdditionalText && (
            <p className="project-detail-paragraph analysis-additional-text">{analysis.secondAdditionalText}</p>
          )}
          {analysis.secondAdditionalList && (
            <ul className="project-detail-list analysis-additional-list">
              {analysis.secondAdditionalList.map((item, index) => (
                <li key={index} className="project-detail-list-item">{item}</li>
              ))}
            </ul>
          )}
          {analysis.secondAnalysisImage && (
            <div className="analysis-image-container-with-description">
              <img
                src={analysis.secondAnalysisImage}
                alt="Analysis Structure 2"
                className="analysis-image"
                onClick={() => onAnalysisImageClick(analysis.secondAnalysisImage)}
                style={{ cursor: 'pointer' }}
              />
              {analysis.secondAnalysisImageDescription && (
                <p className="analysis-image-description">{analysis.secondAnalysisImageDescription}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
