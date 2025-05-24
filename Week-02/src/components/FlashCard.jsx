import React from 'react';

const FlashCard = ({ question, answer, difficulty, number, isFlipped, onFlip }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-cyan-500 text-cyan-100';
      case 'medium':
        return 'bg-yellow-500 text-yellow-100';
      case 'hard':
        return 'bg-red-500 text-red-100';
      default:
        return 'bg-gray-500 text-gray-100';
    }
  };

  return (
    <div 
      className="bg-gray-800 rounded-lg p-6 border border-gray-700 cursor-pointer hover:bg-gray-750 transition-colors duration-200 min-h-64 flex flex-col justify-between"
      onClick={onFlip}
    >
      {!isFlipped ? (
        // Question side
        <>
          <div>
            <div className="text-gray-400 text-sm mb-4">
              Question {number}
            </div>
            <h3 className="text-white text-xl font-medium leading-relaxed">
              {question}
            </h3>
          </div>
          <div className="mt-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
          </div>
        </>
      ) : (
        // Answer side
        <>
          <div>
            <div className="text-gray-400 text-sm mb-4 flex items-center justify-between">
              <span>Answer :</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(difficulty)}`}>
                {difficulty}
              </span>
            </div>
            <h3 className="text-white text-xl font-medium mb-4">
              {question.length > 50 ? question.substring(0, 50) + "..." : question}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {answer}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FlashCard;