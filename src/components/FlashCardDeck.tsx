// src/components/FlashCardDeck.tsx

import React, { useState } from "react";
import FlashCard from "./FlashCard";
import { FlashCardProps } from "../types/Flashcard";
import "./index.css";

interface FlashCardDeckProps {
  flashCards: FlashCardProps[];
}

const FlashCardDeck: React.FC<FlashCardDeckProps> = ({ flashCards }) => {
  const [shuffledCards, setShuffledCards] = useState([...flashCards]);

  const handleShuffleClick = () => {
    const newShuffledCards = [...flashCards].sort(() => Math.random() - 0.5);
    setShuffledCards(newShuffledCards);
  };

  return (
    <div className="layout-column align-items-center justify-content-start">
      <div className="flashcard-deck" data-testid="flashcard-deck">
        {shuffledCards.map((card) => (
          <FlashCard key={card.id} {...card} />
        ))}
      </div>
      <button onClick={handleShuffleClick} data-testid="shuffle-button">
        Shuffle
      </button>
    </div>
  );
};

export default FlashCardDeck;
