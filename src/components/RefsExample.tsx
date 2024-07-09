import React, { useRef, useEffect } from 'react';

const RefsExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input element when component mounts
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    // Access the DOM node directly
    inputRef.current?.select();
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">14. Refs and the DOM</h2>
        <input 
          ref={inputRef} 
          type="text" 
          className="form-control mb-3" 
          defaultValue="This input is focused on mount"
        />
        <button className="btn btn-primary" onClick={handleClick}>
          Select Input Text
        </button>
      </div>
    </div>
  );
};

export default RefsExample;