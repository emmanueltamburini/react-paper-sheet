import React, { useState } from 'react';

// Component using render props
interface MouseTrackerProps {
  render: (state: { x: number; y: number }) => React.ReactNode;
}

const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: '200px', border: '1px solid black' }}>
      {render(position)}
    </div>
  );
};

const RenderPropsExample: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">12. Render Props</h2>
        <MouseTracker
          render={({ x, y }) => (
            <p>Mouse position: ({x}, {y})</p>
          )}
        />
      </div>
    </div>
  );
};

export default RenderPropsExample;