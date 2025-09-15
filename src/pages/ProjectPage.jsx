import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects';
import ProjectHero from '../components/ProjectHero';
import ProjectMainImage from '../components/ProjectMainImage';
import CaseGrid from '../components/CaseGrid';
import ProjectDetails from '../components/ProjectDetails';
import Footer from '../components/Footer';
import Modal from '../components/Modal'; // Import the new Modal component

import './ProjectPage.css';

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <main>
      <div className="back-link-container" style={{ '--project-accent-color': project.accentColor }}>
        <Link to="/" className="back-link">Вернуться обратно</Link>
      </div>
      <ProjectHero title={project.title} status= {project.status} type={project.type} time={project.time} intro={project.intro} />
      {project.mainImage && <ProjectMainImage imageUrl={project.mainImage} altText={project.title} />}
      <ProjectDetails
        introduction={project.introduction}
        tasks={project.tasks}
        research={project.research}
        analysis={project.analysis}
        sidebarTitle={project.detailsSidebarTitle}
        onAnalysisImageClick={openModal}
      />
      {project.currencyTransfer && (
        <ProjectDetails
          introduction={project.currencyTransfer}
          onAnalysisImageClick={openModal}
          className="currency-transfer-section"
        />
      )}
      {project.currencyTransfer && project.currencyTransfer.intermediateStage && (
        <ProjectDetails
          introduction={project.currencyTransfer.intermediateStage}
          onAnalysisImageClick={openModal}
          isAdditionalSection={true}
        />
      )}
      {project.currencyTransfer && project.currencyTransfer.finalSolution && (
        <ProjectDetails
          introduction={project.currencyTransfer.finalSolution}
          onAnalysisImageClick={openModal}
          isAdditionalSection={true}
        />
      )}
      {project.currencyTransfer2 && (
        <ProjectDetails
          introduction={project.currencyTransfer2}
          onAnalysisImageClick={openModal}
          className="currency-transfer-section"
          isAdditionalSection={true}
        />
      )}
      {project.colleagueInfo && (
        <ProjectDetails
          introduction={project.colleagueInfo}
          onAnalysisImageClick={openModal}
          className="currency-transfer-section"
        />
      )}
      {project.colleagueInfo && project.colleagueInfo.finalSolution && (
        <ProjectDetails
          introduction={project.colleagueInfo.finalSolution}
          onAnalysisImageClick={openModal}
          isAdditionalSection={true}
        />
      )}
      {project.challengeParticipation && (
        <ProjectDetails
          introduction={project.challengeParticipation}
          onAnalysisImageClick={openModal}
          className="currency-transfer-section"
        />
      )}
      {project.challengeParticipation && project.challengeParticipation.finalSolution && (
        <ProjectDetails
          introduction={project.challengeParticipation.finalSolution}
          onAnalysisImageClick={openModal}
          isAdditionalSection={true}
        />
      )}
      {project.challengeParticipation && project.challengeParticipation.result && (
        <ProjectDetails
          introduction={project.challengeParticipation.result}
          onAnalysisImageClick={openModal}
        />
      )}
      
      {project.fullWidthImage && <ProjectFullWidthImage imageUrl={project.fullWidthImage} altText="Analysis Structure" />}
      {project.caseStudies && <CaseGrid caseItems={project.caseStudies} onImageClick={openModal} />}
      <Footer />
      {isModalOpen && selectedImage && (
        <Modal imageUrl={selectedImage} altText="Case Study" onClose={closeModal} accentColor={project.accentColor} />
      )}
    </main>
  );
};

export default ProjectPage;
