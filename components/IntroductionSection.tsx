
import React from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import TelescopeIcon from './icons/TelescopeIcon';

const IntroductionSection: React.FC = () => {
  const [fadeRef, fadeStyle] = useScrollFadeIn<HTMLDivElement>();

  return (
    <section id="intro" className="py-20 lg:py-32">
      <div
        ref={fadeRef}
        style={fadeStyle}
        className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discovering New Frontiers
          </h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>
              An <span className="text-indigo-400 font-semibold">exoplanet</span> is any planet beyond our solar system, orbiting a star other than our Sun.
            </p>
            <p>
              Missions like NASA's Kepler Space Telescope detect these distant worlds by observing tiny dips in a star's brightness, a phenomenon known as a transit.
            </p>
            <p>
              This project leverages <span className="text-indigo-400 font-semibold">Artificial Intelligence</span> to analyze vast datasets from these missions, helping to distinguish true planets from stellar noise and false positives.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <TelescopeIcon className="w-48 h-48 lg:w-64 lg:h-64 text-indigo-500 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
