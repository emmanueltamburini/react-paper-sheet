import React from 'react';

// Example of JSX
const JSXExample: React.FC = () => {
  const element = <h1>Hello, world!</h1>;
  return element;
};

// Props interface for Welcome components
interface WelcomeProps {
  name: string;
}

// Functional component example
const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};

// Class component example
class WelcomeClass extends React.Component<WelcomeProps> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// State example using hooks
const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

// Main component combining all examples
const BasicExample: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">1. React Basics</h2>
        <div className="mb-3">
          <h3>JSX Example</h3>
          <JSXExample />
        </div>
        <div className="mb-3">
          <h3>Functional Component Example</h3>
          <Welcome name="Alice" />
        </div>
        <div className="mb-3">
          <h3>Class Component Example</h3>
          <WelcomeClass name="Bob" />
        </div>
        <div className="mb-3">
          <h3>State Example</h3>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default BasicExample;