import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Modal component using portal
const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '5px'
      }}>
        <h2>Modal Content</h2>
        <p>This is rendered outside the DOM hierarchy of the parent component.</p>
        <button className="btn btn-secondary" onClick={onClose}>Close Modal</button>
      </div>
    </div>,
    document.body
  );
};

const PortalsExample: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">15. React Portals</h2>
        <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default PortalsExample;