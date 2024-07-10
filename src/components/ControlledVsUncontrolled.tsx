import React, { useState, useRef } from 'react';

const ControlledVsUncontrolled: React.FC = () => {
  // State for controlled component
  const [controlledInput, setControlledInput] = useState('');

  // Ref for uncontrolled component
  const uncontrolledInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Accessing controlled component value
    console.log('Controlled input value:', controlledInput);

    // Accessing uncontrolled component value
    console.log('Uncontrolled input value:', uncontrolledInputRef.current?.value);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Controlled vs Uncontrolled Components</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="controlled-input" className="form-label">Controlled Input:</label>
            <input
              id="controlled-input"
              type="text"
              className="form-control"
              value={controlledInput}
              onChange={(e) => setControlledInput(e.target.value)}
              placeholder="Type here..."
            />
            <small className="form-text text-muted">
              Current value: {controlledInput}
            </small>
          </div>

          <div className="mb-3">
            <label htmlFor="uncontrolled-input" className="form-label">Uncontrolled Input:</label>
            <input
              id="uncontrolled-input"
              type="text"
              className="form-control"
              ref={uncontrolledInputRef}
              defaultValue="Default value"
              placeholder="Type here..."
            />
            <small className="form-text text-muted">
              Value is managed by the DOM
            </small>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ControlledVsUncontrolled;