import React from 'react';

const Header = () => {
  return (
    <div className="text-center mb-12">
      {/* Badge */}
      <div className="inline-block mb-6">
        <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600">
          From Beginner to Advanced Questions
        </span>
      </div>
      
      {/* Title with React Logo */}
      <div className="flex items-center justify-center mb-4">
        <div className="mr-4">
          <svg 
            className="w-12 h-12 text-cyan-400" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.85-1.87 1.85S10.13 13.04 10.13 12s.84-1.89 1.87-1.89M12 1.5c-.83 0-1.5.67-1.5 1.5 0 .84.67 1.5 1.5 1.5.83 0 1.5-.66 1.5-1.5 0-.83-.67-1.5-1.5-1.5M21 9l-1.42-1.5L18.17 9l1.41 1.5L21 9M3 9l1.42-1.5L5.83 9l-1.41 1.5L3 9m9 15c-.83 0-1.5-.67-1.5-1.5 0-.84.67-1.5 1.5-1.5.83 0 1.5.66 1.5 1.5 0 .83-.67 1.5-1.5 1.5m7.42-3.5l-1.41-1.5L18.17 15l1.42 1.5L21 15.5M5.83 15l-1.42 1.5L3 15.5l1.41-1.5L5.83 15M12 6.5c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2C7.03 4.5 3 8.53 3 13.5S7.03 22.5 12 22.5s9-4.03 9-9-4.03-9-9-9Z"/>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          The React Flash Cards.
        </h1>
      </div>
      
      {/* Subtitle */}
      <p className="text-gray-400 text-lg">
        Test your react knowledge by answering the flashcards below
      </p>
    </div>
  );
};

export default Header;