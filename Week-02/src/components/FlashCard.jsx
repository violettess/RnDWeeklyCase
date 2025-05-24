import React from 'react';
import '../App.css';

const FlashCard = ({ question, answer, difficulty, number, isFlipped, onFlip }) => {
  const getDifficultyClass = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'difficulty-easy';
      case 'medium':
        return 'difficulty-medium';
      case 'hard':
        return 'difficulty-hard';
      default:
        return 'difficulty-default';
    }
  };

  return (
    <div 
      className="flashcard"
      onClick={onFlip}
    >
      {!isFlipped ? (
        <>
          <div>
            <div className="flashcard-number">
              Question {number}
            </div>
            <h3 className="flashcard-question">
              {question}
            </h3>
          </div>
          <div className="flashcard-difficulty-wrapper">
            <span className={`flashcard-difficulty ${getDifficultyClass(difficulty)}`}>
              {difficulty}
            </span>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="flashcard-answer-header back">
              <span>Answer :</span>
              <span className={`flashcard-difficulty ${getDifficultyClass(difficulty)}`}>
                {difficulty}
              </span>
            </div>
            <h3 className="flashcard-question back">
              {question}
            </h3>
            <p className="flashcard-answer back">
              {answer}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FlashCard;
