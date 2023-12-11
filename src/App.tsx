// src/App.tsx

import React from "react";
import FlashCardDeck from "./components/FlashCardDeck";
import { flashcardData } from "./data/flashcardData";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Flashcard App</h1>
      <FlashCardDeck flashCards={flashcardData} />
    </div>
  );
};

export default App;
