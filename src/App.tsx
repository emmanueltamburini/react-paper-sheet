import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import BasicExample from './components/BasicExample';
import LifecycleExample from './components/LifecycleExample';
import StateManagementExample from './components/StateManagementExample';
import RoutingExample from './components/RoutingExample';
import HooksExample from './components/HooksExample';
import FormsExample from './components/FormsExample';
import PerformanceExample from './components/PerformanceExample';
import SSRExample from './components/SSRExample';
import TestingExample from './components/TestingExample';
import StylingExample from './components/StylingExample';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="container">
          <h1 className="my-4">React Examples</h1>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" to="/">Basics</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hooks">Hooks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lifecycle">Lifecycle</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/state-management">State Management</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/routing">Routing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/forms">Forms</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/performance">Performance</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ssr">SSR</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testing">Testing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/styling">Styling</Link>
            </li>
          </ul>

          <div className="mt-4">
            <Routes>
              <Route path="/" element={<BasicExample />} />
              <Route path="/hooks" element={<HooksExample />} />
              <Route path="/lifecycle" element={<LifecycleExample />} />
              <Route path="/state-management" element={<StateManagementExample />} />
              <Route path="/routing/*" element={<RoutingExample />} />
              <Route path="/forms" element={<FormsExample/>} />
              <Route path="/performance" element={<PerformanceExample/>} />
              <Route path="/ssr" element={<SSRExample/>} />
              <Route path="/testing" element={<TestingExample/>} />
              <Route path="/styling" element={<StylingExample/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
