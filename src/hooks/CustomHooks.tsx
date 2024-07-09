import React, { useState, useEffect } from 'react';

// Custom hook example
export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

// Context for theme
export const ThemeContext = React.createContext('light');

// Reducer for counter
export type CounterState = { count: number };
export type CounterAction = { type: 'increment' | 'decrement' };

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

