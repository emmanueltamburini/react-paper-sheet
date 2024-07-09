/** @jsxImportSource @emotion/react */
import React from 'react';
import styledComponent from 'styled-components';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// CSS Modules example (假设你有一个 styles.module.css 文件)
import styles from './styles.module.css';

// Styled Components example
const StyledButton = styledComponent.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

// Emotion example
const emotionStyles = css`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

const EmotionButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

const StylingExample: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">10. Styling in React</h2>
        
        <h3>CSS Modules</h3>
        <button className={styles.button}>CSS Modules Button</button>
        
        <h3 className="mt-3">Styled Components</h3>
        <StyledButton>Styled Components Button</StyledButton>
        
        <h3 className="mt-3">Emotion</h3>
        <button css={emotionStyles}>Emotion CSS Button</button>
        <EmotionButton>Emotion Styled Button</EmotionButton>
      </div>
    </div>
  );
};

export default StylingExample;
