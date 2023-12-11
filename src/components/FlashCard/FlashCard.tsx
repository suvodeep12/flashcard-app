// src/components/FlashCard.tsx

import React, { useState } from "react";
import { FlashCardProps } from "../../types/Flashcard";
import "./FlashCard.css"

const FlashCard: React.FC<FlashCardProps> = ({ id, question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
      data-testid={`flashcard-container-${id}`}
    >
      <div className="flashcard-content">
        <div className="front" data-testid={`flashcard-question-${id}`}>
          {isFlipped ? answer : question}
        </div>
        <div className="back" data-testid={`flashcard-answer-${id}`}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FlashCard;

// TODO: Fix rotating animation