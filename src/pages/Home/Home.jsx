import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-scroll';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import AboutSection from '../../components/Aboutsection/AboutSection';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ValuesSection from '../../components/ValuesSection/ValuesSection';
const Home = () => {
  return (
<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <AboutSection />
        <ImageGallery />
        <ValuesSection />
      </main>
      <Footer />  
    </div>
  );
};

export default Home;