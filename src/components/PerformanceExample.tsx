import React, { useState, useMemo, useCallback } from 'react';

// Component to demonstrate React.memo
const ExpensiveComponent: React.FC<{ value: number }> = React.memo(({ value }) => {
  console.log('ExpensiveComponent rendered');
  return <div>Expensive Computation Result: {value * 2}</div>;
});

const PerformanceExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // useMemo example
  const expensiveResult = useMemo(() => {
    console.log('Expensive calculation performed');
    return count * 2;
  }, [count]);

  // useCallback example
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    setCount(count + 1);
  }, [count]);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">7. Performance Optimization</h2>
        
        <h3>React.memo Example</h3>
        <ExpensiveComponent value={count} />
        <button className="btn btn-primary mt-2" onClick={() => setOtherState(otherState + 1)}>
          Update Other State (Doesn't Re-render ExpensiveComponent)
        </button>

        <h3 className="mt-3">useMemo Example</h3>
        <p>Expensive Result: {expensiveResult}</p>

        <h3 className="mt-3">useCallback Example</h3>
        <button className="btn btn-primary" onClick={handleClick}>
          Increment Count (Using useCallback)
        </button>

        <p className="mt-3">Count: {count}</p>
        <p>Other State: {otherState}</p>
      </div>
    </div>
  );
};

export default PerformanceExample;