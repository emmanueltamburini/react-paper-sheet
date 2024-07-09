import React, { useState, useEffect, useReducer } from 'react';
import { CounterAction, CounterState, useWindowWidth } from '../hooks/CustomHooks';
import { useTheme } from '../context/ThemeContext';

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const HooksExample: React.FC = () => {
  // useState example
  const [name, setName] = useState('');

  // useEffect example
  useEffect(() => {
    document.title = `Hello, ${name}`;
  }, [name]);

  // useContext example
  const { theme, toggleTheme } = useTheme();


  // useReducer example
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  // Custom hook usage
  const windowWidth = useWindowWidth();

  return (
    <div>
      <h2>2. Hooks</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <p>Window width: {windowWidth}px</p>
    </div>
  );
};

export default HooksExample;