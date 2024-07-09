import React, { useEffect, useState } from 'react';

const LifecycleExample: React.FC = () => {
  const [count, setCount] = useState(0);

  // Mounting
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log('Component updated');
  });

  return (
    <div>
      <h2>3. Component Lifecycle</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifecycleExample;