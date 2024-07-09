# React paperSheet

This is a basic React application named PaperSheet.

## How to run

### Prerequisites

Before you begin, ensure you have the following installed on your system:

1. Node.js and npm (Node Package Manager)
   - Download and install from: <https://nodejs.org/>

### Running the Application

Follow these steps to run the application:

1. Open a command prompt or terminal.

2. Navigate to the project's root directory.

3. Install the project dependencies:

   ``` batch
   npm install
   ```

4. Start the development server:

   ``` batch
   npm start
   ```

5. The application should now be running. By default, it will be accessible at `http://localhost:3000`.

### Development

To make changes to the project:

1. Open the project in your preferred code editor.

2. The main application file is typically `src/App.js`.

3. Make your desired changes.

4. The development server will automatically reload the application when you save changes.

## Testing

To run the tests for this application:

1. In the project's root directory, execute:

   ``` batch
   npm test
   ```

## Additional Information

- This project was created with Create React App.
- It includes dependencies for React and React DOM.
- The project is configured to use the latest stable version of JavaScript.

For more information on React, visit: <https://reactjs.org/>

## Index

1. React Basics:
   - JSX
   - Components (Functional and Class)
   - Props
   - State

2. Hooks:
   - useState
   - useEffect
   - useContext
   - useReducer
   - Custom Hooks

3. Component Lifecycle:
   - Mounting
   - Updating
   - Unmounting

4. State Management:
   - Context API
   - Redux
   - MobX

5. Routing:
   - React Router

6. Forms and Controlled Components

7. Performance Optimization:
   - React.memo
   - useMemo
   - useCallback

8. Server-Side Rendering (SSR):
   - Next.js

9. Testing:
   - Jest
   - React Testing Library

10. Styling in React:
    - CSS Modules
    - Styled Components
    - Emotion

11. Higher-Order Components (HOCs)

12. Render Props

13. Error Boundaries

14. Refs and the DOM

15. React Portals

16. Code Splitting:
    - React.lazy
    - Suspense

## Resume

### 1. React Basics

   a) JSX:
   JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.

   Example:

   ```jsx
   const element = <h1>Hello, world!</h1>;
   ```

   b) Components (Functional and Class):
   Components are the building blocks of React applications.

   Functional Component:

   ```jsx
   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }
   ```

   Class Component:

   ```jsx
   class Welcome extends React.Component {
     render() {
       return <h1>Hello, {this.props.name}</h1>;
     }
   }
   ```

   c) Props:
   Props are how components receive data from their parent.

   Example:

   ```jsx
   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }

   function App() {
     return <Welcome name="Sara" />;
   }
   ```

   d) State:
   State is mutable data that affects a component's rendering.

   Example:

   ```jsx
   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }
   ```

### 2. Hooks

   a) useState:
   Lets you add state to functional components.

   Example:

   ```jsx
   function NameInput() {
     const [name, setName] = useState('');

     return (
       <input
         value={name}
         onChange={e => setName(e.target.value)}
       />
     );
   }
   ```

   b) useEffect:
   Lets you perform side effects in function components.

   Example:

   ```jsx
   function DataFetcher() {
     const [data, setData] = useState(null);

     useEffect(() => {
       fetch('https://api.example.com/data')
         .then(response => response.json())
         .then(data => setData(data));
     }, []); // Empty array means this effect runs once on mount

     return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
   }
   ```

   c) useContext:
   Lets you subscribe to React context without introducing nesting.

   Example:

   ```jsx
   const ThemeContext = React.createContext('light');

   function ThemedButton() {
     const theme = useContext(ThemeContext);
     return <button style={{ background: theme }}>I'm styled by theme context!</button>;
   }
   ```

   d) useReducer:
   An alternative to useState for complex state logic.

   Example:

   ```jsx
   function reducer(state, action) {
     switch (action.type) {
       case 'increment':
         return {count: state.count + 1};
       case 'decrement':
         return {count: state.count - 1};
       default:
         throw new Error();
     }
   }

   function Counter() {
     const [state, dispatch] = useReducer(reducer, { count: 0 });
     return (
       <>
         Count: {state.count}
         <button onClick={() => dispatch({type: 'increment'})}>+</button>
         <button onClick={() => dispatch({type: 'decrement'})}>-</button>
       </>
     );
   }
   ```

   e) Custom Hooks:
   Let you extract component logic into reusable functions.

   Example:

   ```jsx
   function useWindowWidth() {
     const [width, setWidth] = useState(window.innerWidth);
     
     useEffect(() => {
       const handleResize = () => setWidth(window.innerWidth);
       window.addEventListener('resize', handleResize);
       return () => {
         window.removeEventListener('resize', handleResize);
       };
     }, []);

     return width;
   }

   function MyComponent() {
     const width = useWindowWidth();
     return <div>Window width: {width}</div>;
   }
   ```

### 3. Component Lifecycle

   While class components have lifecycle methods, functional components can use the useEffect hook to handle lifecycle events.

   a) Mounting:

   ```jsx
   useEffect(() => {
     console.log('Component mounted');
   }, []); // Empty array means this runs once on mount
   ```

   b) Updating:

   ```jsx
   useEffect(() => {
     console.log('Component updated');
   }); // No array means this runs on every render
   ```

   c) Unmounting:

   ```jsx
   useEffect(() => {
     return () => {
       console.log('Component will unmount');
     };
   }, []); // This cleanup function runs when the component unmounts
   ```

### 4. State Management

   a) Context API:

   ```jsx
   const ThemeContext = React.createContext('light');

   function App() {
     return (
       <ThemeContext.Provider value="dark">
         <Toolbar />
       </ThemeContext.Provider>
     );
   }

   function Toolbar() {
     return (
       <div>
         <ThemedButton />
       </div>
     );
   }

   function ThemedButton() {
     const theme = useContext(ThemeContext);
     return <button style={{ background: theme }}>I'm styled by theme context!</button>;
   }
   ```

   b) Redux:

   ```jsx
   // Action
   const increment = () => {
     return { type: 'INCREMENT' }
   }

   // Reducer
   const counterReducer = (state = 0, action) => {
     switch(action.type) {
       case 'INCREMENT':
         return state + 1
       default:
         return state
     }
   }

   // Store
   let store = createStore(counterReducer)

   // Component
   function Counter() {
     const count = useSelector(state => state)
     const dispatch = useDispatch()

     return (
       <div>
         <span>{count}</span>
         <button onClick={() => dispatch(increment())}>+</button>
       </div>
     )
   }
   ```

   c) MobX:

   ```jsx
   import { makeObservable, observable, action } from "mobx"
   import { observer } from "mobx-react-lite"

   class TodoStore {
     todos = []

     constructor() {
       makeObservable(this, {
         todos: observable,
         addTodo: action
       })
     }

     addTodo(task) {
       this.todos.push({ task, completed: false })
     }
   }

   const TodoList = observer(({ store }) => (
     <ul>
       {store.todos.map((todo, index) => (
         <li key={index}>{todo.task}</li>
       ))}
     </ul>
   ))

   const store = new TodoStore()
   ```

### 5. Routing

   React Router is the most popular solution for handling routing in React applications.

   Example:

   ```jsx
   import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

   function App() {
     return (
       <Router>
         <div>
           <nav>
             <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/users">Users</Link></li>
             </ul>
           </nav>

           <Switch>
             <Route path="/about">
               <About />
             </Route>
             <Route path="/users">
               <Users />
             </Route>
             <Route path="/">
               <Home />
             </Route>
           </Switch>
         </div>
       </Router>
     );
   }

   function Home() {
     return <h2>Home</h2>;
   }

   function About() {
     return <h2>About</h2>;
   }

   function Users() {
     return <h2>Users</h2>;
   }
   ```

### 6. Forms and Controlled Components

In React, form elements such as input, textarea, and select maintain their own state. A controlled component is one where React controls the state of these form elements.

Example:

```jsx
import React, { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', { name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### 7. Performance Optimization

React provides several ways to optimize performance:

a) React.memo:
A higher-order component that memoizes the rendered output of the wrapped component to prevent unnecessary re-renders.

Example:

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

b) useMemo:
A hook that memoizes expensive computations.

Example:

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

c) useCallback:
A hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed.

Example:

```jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

### 8. Server-Side Rendering (SSR)

SSR allows you to render React components on the server. Next.js is a popular framework that provides SSR capabilities out of the box.

Example (Next.js):

```jsx
// pages/index.js
function Home({ serverData }) {
  return <h1>{serverData}</h1>
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.example.com/data`)
  const serverData = await res.json()

  return { props: { serverData } }
}

export default Home
```

### 9. Testing

React applications can be tested using various tools. Jest is a popular testing framework, and React Testing Library is commonly used for component testing.

Example:

```jsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

test('increments counter', () => {
  render(<Counter />);
  
  const counter = screen.getByText(/count/i);
  const incrementBtn = screen.getByText(/increment/i);
  
  expect(counter.textContent).toBe('Count: 0');
  
  fireEvent.click(incrementBtn);
  
  expect(counter.textContent).toBe('Count: 1');
});
```

### 10. Styling in React

There are several approaches to styling in React:

a) CSS Modules:
CSS Modules allow you to write CSS that's scoped to a specific component.

Example:

```jsx
// Button.module.css
.error {
  background-color: red;
  color: white;
}

// Button.js
import styles from './Button.module.css';

function Button() {
  return <button className={styles.error}>Error Button</button>;
}
```

b) Styled Components:
A library that allows you to write actual CSS code to style your components.

Example:

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

function MyComponent() {
  return <Button>Click me!</Button>;
}
```

c) Emotion:
Another CSS-in-JS library with a similar API to styled-components.

Example:

```jsx
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const style = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
)
```

### 11. Higher-Order Components (HOCs)

HOCs are functions that take a component and return a new component with some added functionality.

Example:

```jsx
function withLoading(WrappedComponent) {
  return function({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  }
}

// Usage
const EnhancedComponent = withLoading(MyComponent);
```

### 12. Render Props

A technique for sharing code between React components using a prop whose value is a function.

Example:

```jsx
class Mouse extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage
<Mouse render={({ x, y }) => (
  <h1>The mouse position is ({x}, {y})</h1>
)}/>
```

### 13. Error Boundaries

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.

Example:

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

// Usage
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

### 14. Refs and the DOM

Refs provide a way to access DOM nodes or React elements created in the render method.

Example:

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

### 15. React Portals

Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

Example:

```jsx
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-root')
  );
}

// Usage
function App() {
  return (
    <div>
      <h1>App</h1>
      <Modal>
        <h2>This is a modal</h2>
      </Modal>
    </div>
  );
}
```

### 16. Code Splitting

Code splitting allows you to split your code into small chunks which you can then load on demand.

a) React.lazy:
Lets you define a component that is loaded dynamically.

b) Suspense:
Lets you specify the loading indicator in case the components in the tree below it are not yet ready to render.

Example:

```jsx
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

These advanced topics provide powerful tools for React development:

- Forms and Controlled Components allow you to manage form state effectively in React.
- Performance Optimization techniques help you improve the efficiency of your React applications.
- Server-Side Rendering enhances initial load performance and SEO.
- Testing ensures your components work as expected and helps prevent regressions.
- Various styling approaches in React give you flexibility in how you structure and manage your CSS.
- HOCs and Render Props offer ways to reuse component logic.
- Error Boundaries help manage errors gracefully in your application.
- Refs allow direct access to DOM elements when necessary.
- Portals enable rendering content outside of the normal component tree.
- Code Splitting helps improve performance by loading code on demand.

Understanding these concepts will allow you to build more complex and efficient React applications. They provide solutions to common problems in large-scale applications and offer ways to optimize performance and improve user experience.
