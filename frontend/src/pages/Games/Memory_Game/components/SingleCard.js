import React from "react";
import "./SingleCard.css";


function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div id="card_game">
      <div id={flipped ? "flipped" : ""}>
        <img id="front" src={card.src} draggable="false" alt="Carta de frente" />
        <img
          id="back"
          src="../imgs/EducaTI.jpg"
          onClick={handleClick}
          alt="Fundo carta EducaTI"
          draggable="false"
        />
      </div>
    </div>
    
  );
}

export default SingleCard;
