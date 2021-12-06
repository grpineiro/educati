import React from "react";

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div id="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <span id="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
