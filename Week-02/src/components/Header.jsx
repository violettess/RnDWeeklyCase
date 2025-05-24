import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <div className="header">
      <div className="badge-wrapper">
        <span className="badge">
          From Beginner to Advanced Questions
        </span>
      </div>

      <div className="title-wrapper">
        <div className="logo">
          <svg 
            className="logo-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
          >
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>
        <h1 className="title">
          The React Flash Cards.
        </h1>
      </div>

      <p className="subtitle">
        Test your react knowledge by answering the flashcards below
      </p>
    </div>
  );
};

export default Header;
