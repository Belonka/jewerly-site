'use client';
import React from 'react';
import ModalTextContent from './ModalTextContent';

export default function Modal({ isOpen, onClose, title, text }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close p-bold" onClick={onClose}>×</button>
       <ModalTextContent title={title} text={text} />
      </div>
    </div>
  );
}