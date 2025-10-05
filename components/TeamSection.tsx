
import React from 'react';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const teamMembers = [
  { name: 'Dr. Evelyn Reed', role: 'Lead AI Researcher', avatar: `https://picsum.photos/seed/evelyn/200` },
  { name: 'Kenji Tanaka', role: 'Data Visualization Engineer', avatar: `https://picsum.photos/seed/kenji/200` },
  { name: 'Maria Garcia', role: 'Astrophysicist & Data Scientist', avatar: `https://picsum.photos/seed/maria/200` },
];

const TeamSection: React.FC = () => {
    const [fadeRef, fadeStyle] = useScrollFadeIn<HTMLDivElement>();

    return (
        <section id="team" className="py-20 lg:py-32">
            <div ref={fadeRef} style={fadeStyle} className="container mx-auto px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Meet the Team</h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <img 
                                src={member.avatar} 
                                alt={member.name} 
                                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700 shadow-lg"
                            />
                            <h3 className="text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-indigo-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
