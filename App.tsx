
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import DatasetsSection from './components/DatasetsSection';
import PredictionDemoSection from './components/PredictionDemoSection';
import VisualizationSection from './components/VisualizationSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a1a] text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <DatasetsSection />
        <PredictionDemoSection />
        <VisualizationSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
