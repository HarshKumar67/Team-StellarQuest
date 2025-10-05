
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} A World Away. All rights reserved.</p>
        <p className="text-sm mt-2">Exploring the cosmos, one planet at a time.</p>
        <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
