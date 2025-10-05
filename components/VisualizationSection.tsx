
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const lightCurveData = Array.from({ length: 100 }, (_, i) => {
    let brightness = 1.0;
    if (i > 45 && i < 55) {
        const dip = Math.sin(((i - 45) / 10) * Math.PI) * 0.005;
        brightness -= dip;
    }
    return {
        time: i,
        brightness: Number(brightness.toFixed(5)),
    };
});

const featureImportanceData = [
  { name: 'Transit Depth', importance: 92, fill: '#8884d8' },
  { name: 'Orbital Period', importance: 85, fill: '#82ca9d' },
  { name: 'Transit Duration', importance: 78, fill: '#ffc658' },
  { name: 'Star Radius', importance: 65, fill: '#ff8042' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-gray-800 border border-gray-600 rounded-md text-white">
        <p className="label">{`Time: ${label}`}</p>
        <p className="intro">{`Brightness: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const VisualizationSection: React.FC = () => {
    const [fadeRef, fadeStyle] = useScrollFadeIn<HTMLDivElement>();

    return (
        <section id="visualization" className="py-20 lg:py-32 bg-black/20">
            <div ref={fadeRef} style={fadeStyle} className="container mx-auto px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">How AI Sees the Stars</h2>
                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 bg-gray-900/50 p-6 rounded-lg border border-gray-700/50">
                        <h3 className="text-xl font-bold text-white mb-4">Sample Light Curve</h3>
                        <p className="text-gray-400 mb-6 text-sm">This chart shows the brightness of a star over time. The dip indicates a potential planet passing in front of it.</p>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={lightCurveData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                                <XAxis dataKey="time" stroke="#A0AEC0" label={{ value: 'Time (hours)', position: 'insideBottom', offset: -5, fill: '#A0AEC0' }}/>
                                <YAxis stroke="#A0AEC0" domain={[0.994, 1.001]} label={{ value: 'Brightness', angle: -90, position: 'insideLeft', fill: '#A0AEC0' }} />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend wrapperStyle={{ color: '#E2E8F0' }} />
                                <Line type="monotone" dataKey="brightness" stroke="#8884d8" dot={false} strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="lg:col-span-2 bg-gray-900/50 p-6 rounded-lg border border-gray-700/50">
                         <h3 className="text-xl font-bold text-white mb-4">Feature Importance</h3>
                         <p className="text-gray-400 mb-6 text-sm">The AI model learns which features are most indicative of a true exoplanet.</p>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart layout="vertical" data={featureImportanceData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                                <XAxis type="number" stroke="#A0AEC0" />
                                <YAxis dataKey="name" type="category" stroke="#A0AEC0" width={100} />
                                <Tooltip cursor={{fill: 'rgba(74, 85, 104, 0.3)'}} contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #4A5568' }}/>
                                <Bar dataKey="importance" background={{ fill: '#2D3748' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisualizationSection;
