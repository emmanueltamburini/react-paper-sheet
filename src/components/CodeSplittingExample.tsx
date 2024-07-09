import React, { Suspense, lazy } from 'react';

// Lazy-loaded component
const LazyComponent = lazy(() => import('./LazyComponent'));

const CodeSplittingExample: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">16. Code Splitting</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default CodeSplittingExample;