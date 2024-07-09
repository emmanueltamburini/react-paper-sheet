import React, { useState, ReactNode } from 'react';

// Error Boundary component
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// Component that may throw an error
const ProblemChild: React.FC<{ shouldThrow: boolean }> = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('I crashed!');
  }
  return <div>I'm fine!</div>;
};

const ErrorBoundaryExample: React.FC = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">13. Error Boundaries</h2>
        <ErrorBoundary>
          <ProblemChild shouldThrow={shouldThrow} />
        </ErrorBoundary>
        <button 
          className="btn btn-danger mt-3" 
          onClick={() => setShouldThrow(true)}
        >
          Throw Error
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundaryExample;
