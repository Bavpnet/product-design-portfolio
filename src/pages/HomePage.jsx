import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PortfolioSection from '../components/PortfolioSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ExperienceSection />
      <EducationSection />
      <Footer />
    </main>
  );
};

export default HomePage;
