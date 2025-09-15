import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ introduction, tasks, research, analysis, sidebarTitle, onAnalysisImageClick, className, isAdditionalSection, result }) => {
  return (
    <div className={`project-details-section ${className || ''}`}>
      {sidebarTitle && (
        <div className="project-details-sidebar">
          <h2 className="project-details-sidebar-title">{sidebarTitle}</h2>
        </div>
      )}
      {introduction && (
        <div className="project-detail-block">
          <h3 className={`project-detail-title ${isAdditionalSection ? 'analysis-additional-text' : ''}`}>{introduction.title}</h3>
          {introduction.flowTitle && (
            <p className="project-detail-flow-title">{introduction.flowTitle}</p>
          )}
          {introduction.paragraphs && introduction.paragraphs.map((paragraph, index) => (
            <p key={index} className={`project-detail-paragraph ${typeof paragraph === 'object' && paragraph.style === 'secondary' ? 'analysis-additional-text' : ''}`}>
              {typeof paragraph === 'object' ? paragraph.text : paragraph}
            </p>
          ))}
          {introduction.list && (
            <ul className={`project-detail-list ${isAdditionalSection ? 'analysis-additional-list' : ''}`}>
              {introduction.list.map((item, index) => (
                <React.Fragment key={index}>
                  {typeof item === 'object' && item.subList ? (
                    <li className="project-detail-list-item">
                      {item.text}
                      <ul className="project-detail-sublist">
                        {item.subList.map((subItem, subIndex) => (
                          <li key={subIndex} className="project-detail-list-item">{subItem}</li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li className="project-detail-list-item">{item}</li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          )}

          {introduction.challengeProblem && (
            <p className="project-detail-paragraph">{introduction.challengeProblem}</p>
          )}
          {introduction.challengeImage && (
            <div className="analysis-image-container-with-description">
              <img
                src={introduction.challengeImage}
                alt="Challenge Problem Image"
                className="analysis-image"
                onClick={() => onAnalysisImageClick(introduction.challengeImage)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          )}
          {introduction.challengeFeedback && (
            <div className="challenge-feedback-section">
              <h3 className={`project-detail-title ${introduction.challengeFeedback.title.style === 'secondary' ? 'analysis-additional-text' : ''}`}>
                {introduction.challengeFeedback.title.text}
              </h3>
              <ul className="project-detail-list">
                {introduction.challengeFeedback.list.map((item, index) => (
                  <li key={index} className="project-detail-list-item">{item}</li>
                ))}
              </ul>
            </div>
          )}
          {introduction.challengeAnalysisText && (
            <p className="project-detail-paragraph">{introduction.challengeAnalysisText}</p>
          )}
          {introduction.challengeAnalysisFeedback && (
            <div className="challenge-analysis-feedback-section">
              <h3 className={`project-detail-title ${introduction.challengeAnalysisFeedback.title.style === 'secondary' ? 'analysis-additional-text' : ''}`}>
                {introduction.challengeAnalysisFeedback.title.text}
              </h3>
              <ul className="project-detail-list">
                {introduction.challengeAnalysisFeedback.list.map((item, index) => (
                  <li key={index} className="project-detail-list-item">{item}</li>
                ))}
              </ul>
            </div>
          )}
          {introduction.image && (
            <div className="analysis-image-container-with-description">
              <img
                src={introduction.image}
                alt="Project Image"
                className="analysis-image"
                onClick={() => onAnalysisImageClick(introduction.image)}
                style={{ cursor: 'pointer' }}
              />
              {introduction.imageDescription && (
                <p className="analysis-image-description">{introduction.imageDescription}</p>
              )}
            </div>
          )}
          {introduction.paragraphs2 && introduction.paragraphs2.map((paragraph, index) => (
            <p key={index} className={`project-detail-paragraph ${typeof paragraph === 'object' && paragraph.style === 'secondary' ? 'analysis-additional-text' : ''}`}>
              {typeof paragraph === 'object' ? paragraph.text : paragraph}
            </p>
          ))}
          
          {introduction.list2 && (
            <ul className={`project-detail-list ${isAdditionalSection ? 'analysis-additional-list' : ''}`}>
              {introduction.list2.map((item, index) => (
                <React.Fragment key={index}>
                  {typeof item === 'object' && item.subList ? (
                    <li className="project-detail-list-item">
                      {item.text}
                      <ul className="project-detail-sublist">
                        {item.subList.map((subItem, subIndex) => (
                          <li key={subIndex} className="project-detail-list-item">{subItem}</li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li className="project-detail-list-item">{item}</li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          )}
        
        </div>
      )}

      {tasks && (
        <div className="project-detail-block">
          <h3 className="project-detail-title">{tasks.title}</h3>
          <ul className="project-detail-list">
            {tasks.list.map((item, index) => (
              <React.Fragment key={index}>
                {typeof item === 'object' && item.subList ? (
                  <li className="project-detail-list-item">
                    {item.text}
                    <ul className="project-detail-sublist">
                      {item.subList.map((subItem, subIndex) => (
                        <li key={subIndex} className="project-detail-list-item">{subItem}</li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="project-detail-list-item">{item}</li>
                )}
              </React.Fragment>
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
              <React.Fragment key={index}>
                {typeof item === 'object' && item.subList ? (
                  <li className="project-detail-list-item">
                    {item.text}
                    <ul className="project-detail-sublist">
                      {item.subList.map((subItem, subIndex) => (
                        <li key={subIndex} className="project-detail-list-item">{subItem}</li>
                      ))}
                    </ul>
                  </li>
                ) : (
              <li key={index} className="project-detail-list-item">{item}</li>
                )}
              </React.Fragment>
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
              <React.Fragment key={index}>
                {typeof item === 'object' && item.subList ? (
                  <li className="project-detail-list-item">
                    {item.text}
                    <ul className="project-detail-sublist">
                      {item.subList.map((subItem, subIndex) => (
                        <li key={subIndex} className="project-detail-list-item">{subItem}</li>
                      ))}
                    </ul>
                  </li>
                ) : (
              <li key={index} className="project-detail-list-item">{item}</li>
                )}
              </React.Fragment>
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
      {result && (
        <div className="project-detail-block">
          <h3 className="project-detail-title">{result.title}</h3>
          {result.listTitle && (
            <p className="project-detail-paragraph">
              {result.listTitle.text}
            </p>
          )}
          {result.list && (
            <ul className="project-detail-list">
              {result.list.map((item, index) => (
                <React.Fragment key={index}>
                  {typeof item === 'object' && item.subList ? (
                    <li className="project-detail-list-item">
                      {item.text}
                      <ul className="project-detail-sublist">
                        {item.subList.map((subItem, subIndex) => (
                          <li key={subIndex} className="project-detail-list-item">{subItem}</li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li className="project-detail-list-item">{item}</li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
