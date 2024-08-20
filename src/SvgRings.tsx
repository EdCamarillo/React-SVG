import React, { useEffect, useState } from 'react';
import './SvgRings.css';

interface SvgRingsProps {
  progress: number;
}

const SvgRings: React.FC<SvgRingsProps> = ({ progress }) => {
  const [isRotating, setIsRotating] = useState<boolean>(false);

  useEffect(() => {
    const innerCircles = document.querySelectorAll<SVGCircleElement>('.inner-circle');
    innerCircles.forEach((circle, index) => {
      const startProgress = index * 33;
      const endProgress = (index + 1) * 33;
      
      let circleProgress = 0;

      if (progress > startProgress) {
        circleProgress = Math.min((progress - startProgress) / (endProgress - startProgress), 1);
      }
      
      circle.style.opacity = `${circleProgress}`;
    });

    // Trigger rotation when progress reaches 100%
    if (progress >= 100) {
      setIsRotating(true);
      setTimeout(() => {
        setIsRotating(false); // Reset rotation after animation
      }, 1000); // Match the duration of the rotate animation
    }
  }, [progress]);

  return (
    <svg viewBox="0 0 200 180" width="200" height="180" className={isRotating ? 'rotate' : ''}>
      {/* Top circle */}
      <g transform="translate(100, 40)">
        <circle className="ring" cx="0" cy="0" r="30" stroke="#6e6e6e" strokeWidth="8" fill="none" />
        <circle className="inner-circle" cx="0" cy="0" r="25" fill="#6e6e6e" />
      </g>

      {/* Bottom-left circle */}
      <g transform="translate(50, 130)">
        <circle className="ring" cx="0" cy="0" r="30" stroke="#6e6e6e" strokeWidth="8" fill="none" />
        <circle className="inner-circle" cx="0" cy="0" r="25" fill="#6e6e6e" />
      </g>

      {/* Bottom-right circle */}
      <g transform="translate(150, 130)">
        <circle className="ring" cx="0" cy="0" r="30" stroke="#6e6e6e" strokeWidth="8" fill="none" />
        <circle className="inner-circle" cx="0" cy="0" r="25" fill="#6e6e6e" />
      </g>
    </svg>
  );
};

export default SvgRings;
