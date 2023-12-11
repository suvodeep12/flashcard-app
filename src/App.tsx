// src/App.tsx

import React from "react";
import FlashCardDeck from "./components/FlashCardDeck/FlashCardDeck";
import { flashcardData } from "./data/flashcardData";
import "./App.css"; // You can create this file for global styles if needed

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Flashcard App</h1>
      </header>
      <main className="app-main">
        <FlashCardDeck flashCards={flashcardData} />
      </main>
    </div>
  );
};

export default App;
