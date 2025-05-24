import React, { useState } from 'react';
import Header from './components/Header';
import FlashCard from './components/FlashCard';
import { flashcardsData } from './data/flashcardsData';

const App = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const handleCardFlip = (index) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flashcardsData.map((card, index) => (
            <FlashCard
              key={index}
              question={card.question}
              answer={card.answer}
              difficulty={card.difficulty}
              number={index + 1}
              isFlipped={flippedCards.has(index)}
              onFlip={() => handleCardFlip(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;