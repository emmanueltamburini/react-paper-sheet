import React from 'react';

// Higher-Order Component
function withLogging<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return class extends React.Component<P> {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`);
    }

    render() {
      return <WrappedComponent {...this.props as P} />;
    }
  };
}

// Simple component to be wrapped
const MyComponent: React.FC<{ name: string }> = ({ name }) => (
  <div>Hello, {name}!</div>
);

// Enhanced component using HOC
const EnhancedComponent = withLogging(MyComponent);

const HOCExample: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">11. Higher-Order Components (HOCs)</h2>
        <p>Open the console to see the logging from the HOC.</p>
        <EnhancedComponent name="John" />
      </div>
    </div>
  );
};

export default HOCExample;