import React, { useState, useEffect } from 'react';
import SvgRings from './SvgRings';

const App: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Progress: {progress}%</h1>
      <SvgRings progress={progress} />
    </div>
  );
};

export default App;
