import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  
  return (
    <div id="wrong-letters-container">
      
        {wrongLetters.length > 0 && <p id="wrong_letters">Letras erradas:</p>}
        {wrongLetters.map((letter, i) => <span id="span_wrongLetters" key={i}>{letter}</span>).reduce((prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]), null)}
      
    </div>
  );
};

export default WrongLetters;
