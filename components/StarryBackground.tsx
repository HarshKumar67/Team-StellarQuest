
import React from 'react';

const StarryBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <style>{`
        @keyframes move-twink-back {
            from {background-position:0 0;}
            to {background-position:-10000px 5000px;}
        }
        .stars, .twinkling {
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          width:100%;
          height:100%;
          display:block;
        }
        .stars {
          background:#0a0a1a url(https://www.transparenttextures.com/patterns/stardust.png) repeat top center;
          z-index: 0;
        }
        .twinkling {
          background:transparent url(https://www.transparenttextures.com/patterns/twinkle-twinkle.png) repeat top center;
          z-index: 1;
          animation:move-twink-back 200s linear infinite;
        }
      `}</style>
      <div className="stars"></div>
      <div className="twinkling"></div>
    </div>
  );
};

export default StarryBackground;
