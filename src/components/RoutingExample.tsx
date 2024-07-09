import React from 'react';
import { Route, Link, Routes, useMatch } from 'react-router-dom';

// Simple components for nested routing
const Home: React.FC = () => <h2>Home</h2>;
const About: React.FC = () => <h2>About</h2>;
const Users: React.FC = () => <h2>Users</h2>;

const RoutingExample: React.FC = () => {
  // Get the current URL path
  const matchHome = useMatch("/routing");
  const matchAbout = useMatch("/routing/about");
  const matchUsers = useMatch("/routing/users");

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">5. Routing</h2>
        <div className="row">
          <div className="col-3">
            {/* Nested navigation */}
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to={matchHome?.pathname || "/routing"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={matchAbout?.pathname || "/routing/about"}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={matchUsers?.pathname || "/routing/users"}>Users</Link>
              </li>
            </ul>
          </div>
          <div className="col-9">
            {/* Nested routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutingExample;
