import React from 'react';
import { useTheme } from '../context/ThemeContext';

const StateManagementExample: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>4. State Management</h2>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default StateManagementExample;