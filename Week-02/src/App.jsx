import React, { useState } from 'react';
import Header from './components/Header';
import FlashCard from './components/FlashCard';
import { flashcardsData } from './data/flashcardsData';
import './App.css';

function App() {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardFlip = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return (
  <div className="main-container">
    <div className="content-container">
        <Header />
        <div className="flashcard-grid">
          {flashcardsData.map((card) => (
            <FlashCard
              key={card.id}
              question={card.question}
              answer={card.answer}
              difficulty={card.difficulty}
              number={card.id}
              isFlipped={flippedCards[card.id] || false}
              onFlip={() => handleCardFlip(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;