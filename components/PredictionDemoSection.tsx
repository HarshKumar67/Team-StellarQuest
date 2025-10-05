
import React, { useState, FormEvent, useCallback } from 'react';
import { PredictionResult, PredictionStatus } from '../types';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-indigo-400 animate-pulse [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-indigo-400 animate-pulse [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 rounded-full bg-indigo-400 animate-pulse"></div>
        <span className="ml-3 text-gray-300">Analyzing light curves...</span>
    </div>
);


const PredictionDemoSection: React.FC = () => {
    const [formState, setFormState] = useState({
        orbitalPeriod: '365.25',
        transitDepth: '0.00008',
        transitDuration: '13',
        planetRadius: '1.0',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<PredictionResult | null>(null);
    const [fadeRef, fadeStyle] = useScrollFadeIn<HTMLDivElement>();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };
    
    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setResult(null);

        setTimeout(() => {
            const random = Math.random();
            let prediction: PredictionResult;

            if (random < 0.5) {
                prediction = {
                    status: PredictionStatus.Confirmed,
                    confidence: Math.floor(Math.random() * 11) + 85, // 85-95%
                    explanation: 'The transit signal is strong and consistent with known planetary models.',
                };
            } else if (random < 0.85) {
                prediction = {
                    status: PredictionStatus.Candidate,
                    confidence: Math.floor(Math.random() * 31) + 60, // 60-90%
                    explanation: 'The transit pattern matches a candidate planet signature but requires further observation.',
                };
            } else {
                prediction = {
                    status: PredictionStatus.FalsePositive,
                    confidence: Math.floor(Math.random() * 31) + 50, // 50-80%
                    explanation: 'The signal shows inconsistencies often associated with stellar activity or binary star systems.',
                };
            }
            setResult(prediction);
            setIsLoading(false);
        }, 2000);
    }, []);

    const downloadCSV = () => {
        if (!result) return;
        const headers = "parameter,value,prediction,confidence,explanation\n";
        const rows = [
            `orbital_period,${formState.orbitalPeriod},${result.status},${result.confidence},"${result.explanation}"`,
            `transit_depth,${formState.transitDepth},,,`,
            `transit_duration,${formState.transitDuration},,,`,
            `planet_radius,${formState.planetRadius},,,`
        ].join("\n");
        
        const csvContent = "data:text/csv;charset=utf-8," + headers + rows;
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "exoplanet_prediction.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const getResultStyling = (status: PredictionStatus) => {
        switch (status) {
            case PredictionStatus.Confirmed: return 'bg-green-500/10 text-green-400 border-green-500/30';
            case PredictionStatus.Candidate: return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
            case PredictionStatus.FalsePositive: return 'bg-red-500/10 text-red-400 border-red-500/30';
            default: return 'bg-gray-700/20 text-gray-300 border-gray-700/30';
        }
    }

    return (
        <section id="demo" className="py-20 lg:py-32">
            <div ref={fadeRef} style={fadeStyle} className="container mx-auto px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">AI Prediction Demo</h2>
                <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 bg-gray-900/50 p-8 rounded-lg border border-gray-700/50">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="orbitalPeriod" className="block text-sm font-medium text-gray-300">Orbital Period (days)</label>
                            <input type="number" name="orbitalPeriod" value={formState.orbitalPeriod} onChange={handleInputChange} className="mt-1 block w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="transitDepth" className="block text-sm font-medium text-gray-300">Transit Depth (fraction)</label>
                            <input type="number" step="0.00001" name="transitDepth" value={formState.transitDepth} onChange={handleInputChange} className="mt-1 block w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div>
                           <label htmlFor="transitDuration" className="block text-sm font-medium text-gray-300">Transit Duration (hours)</label>
                            <input type="number" name="transitDuration" value={formState.transitDuration} onChange={handleInputChange} className="mt-1 block w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <div>
                           <label htmlFor="planetRadius" className="block text-sm font-medium text-gray-300">Planet Radius (Earth units)</label>
                            <input type="number" step="0.1" name="planetRadius" value={formState.planetRadius} onChange={handleInputChange} className="mt-1 block w-full bg-gray-800 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <button type="submit" disabled={isLoading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                            🔮 Predict
                        </button>
                    </form>

                    <div className="flex flex-col justify-center items-center min-h-[300px] bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
                        {isLoading && <LoadingSpinner />}
                        {!isLoading && result && (
                            <div className={`w-full text-center p-6 rounded-lg border ${getResultStyling(result.status)}`}>
                                <p className="text-2xl font-bold">{result.status}</p>
                                <p className="text-5xl font-bold my-4">{result.confidence}<span className="text-3xl opacity-70">%</span></p>
                                <p className="text-sm opacity-90">{result.explanation}</p>
                                <button onClick={downloadCSV} className="mt-6 bg-gray-600/50 text-gray-200 py-2 px-4 rounded hover:bg-gray-500/50 transition-colors text-sm">Download Result CSV</button>
                            </div>
                        )}
                        {!isLoading && !result && (
                            <div className="text-center text-gray-400">
                                <p className="text-lg">Your prediction result will appear here.</p>
                                <p className="text-sm">Enter transit data and click "Predict".</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PredictionDemoSection;
