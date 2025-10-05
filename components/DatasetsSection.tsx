
import React from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import PlanetIcon from './icons/PlanetIcon';

const datasets = [
  {
    name: 'Kepler',
    description: 'The pioneering mission that revealed the diversity of planets in our galaxy.',
    icon: <PlanetIcon className="w-10 h-10 text-indigo-400" />,
  },
  {
    name: 'K2',
    description: 'Kepler\'s second life, observing different parts of the sky along the ecliptic.',
    icon: <PlanetIcon className="w-10 h-10 text-teal-400" />,
  },
  {
    name: 'TESS',
    description: 'The Transiting Exoplanet Survey Satellite, scanning the entire sky for nearby planets.',
    icon: <PlanetIcon className="w-10 h-10 text-sky-400" />,
  },
];

const DatasetCard: React.FC<{
  name: string;
  description: string;
  icon: React.ReactNode;
}> = ({ name, description, icon }) => {
  const [fadeRef, fadeStyle] = useScrollFadeIn<HTMLDivElement>();
  return (
    <div
      ref={fadeRef}
      style={{...fadeStyle, transitionDelay: '150ms'}}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const DatasetsSection: React.FC = () => {
  const [titleRef, titleStyle] = useScrollFadeIn<HTMLHeadingElement>();

  return (
    <section id="datasets" className="py-20 lg:py-32 bg-black/20">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 
            ref={titleRef} 
            style={titleStyle} 
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Powering Discovery with Data
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {datasets.map((dataset) => (
            <DatasetCard key={dataset.name} {...dataset} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DatasetsSection;
