import React, { useEffect } from "react";
import { checkWin } from "./Helpers";

const Popup = ({ correctLetters, wrongLetters, conqueredStars, selectedWord, setPlayable, playAgain }) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Parabéns! Você conseguiu! 😃";
    finalMessageRevealWord = `Estrelas conquistadas: ⭐ ${conqueredStars}`;
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Infelizmente você perdeu. 😕";
    finalMessageRevealWord = `...A palavra era: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div id="popup-container" style={finalMessage !== "" ? { display: "flex" } : {}}>
      <div id="popup">
        <h2 id="h2_final_message">{finalMessage}</h2>
        <h3 id="h3_reveal_word">{finalMessageRevealWord}</h3>
        <button id="btn_play_again" onClick={playAgain}>Jogar novamente</button>
      </div>
    </div>
  );
};

export default Popup;
