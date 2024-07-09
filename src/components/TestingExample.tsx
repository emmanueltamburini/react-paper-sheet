import React from 'react';

const TestingExample: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">9. Testing</h2>
        <h3>Jest Example</h3>
        <pre className="bg-light p-3 rounded">
          {`
// Example test using Jest
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
          `}
        </pre>

        <h3 className="mt-3">React Testing Library Example</h3>
        <pre className="bg-light p-3 rounded">
          {`
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter', () => {
  render(<Counter />);
  const button = screen.getByText(/increment/i);
  fireEvent.click(button);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
          `}
        </pre>
        <p>
          Note: These are example test snippets. In a real project, these would be in separate 
          .test.js or .spec.js files and run using a test runner.
        </p>
      </div>
    </div>
  );
};

export default TestingExample;