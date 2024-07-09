import React, { useState } from 'react';

const FormsExample: React.FC = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { name, email });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">6. Forms and Controlled Components</h2>
        <form onSubmit={handleSubmit}>
          {/* Controlled input for name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Controlled input for email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {/* Display current form state */}
        <div className="mt-3">
          <h3>Form State:</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default FormsExample;