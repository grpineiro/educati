import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import { showNotification as show } from "./components/Helpers";
import stars from "./components/Stars";

import { Link } from 'react-router-dom'
import "./estiloForca.css";

const words = [
  "leão",
  "girafa",
  "abelha",
  "alce",
  "baleia",
  "borboleta",
  "bode",
  "cabra",
  "cobra",
  "arara",
  "avestruz",
  "macaco",
  "cachorro",
  "gato",
  "caracol",
  "castor",
  "chimpanzé",
  "coelho",
  "crocodilo",
  "jacaré",
  "doninha",
  "égua",
  "cavalo",
  "elefante",
  "coruja",
  "enguia",
  "faisão",
  "falcão",
  "flamingo",
  "foca",
  "furão",
  "formiga",
  "gambá",
  "gafanhoto",
  "gavião",
  "gorila",
  "guaxinim",
  "hamster",
  "hiena",
  "hipopótamo",
  "iguana",
  "jabuti",
  "cágado",
  "javali",
  "jararaca",
  "coala",
  "mamute",
  "marmota",
  "marreco",
  "mico",
  "morcego",
  "morsa",
  "tigre",
  "tartaruga",
  "ovelha",
  "panda",
  "papagaio",
  "pássaro",
  "pato",
  "pavão",
  "pinguim",
  "polvo",
  "ornitorrinco",
  "rã",
  "rato",
  "sabiá",
  "sapo",
  "suricate",
  "tamanduá",
  "leopardo",
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  /*const stars = ({ wrongLetters, selectedWord }) => {
    let stars = 0;

    if (selectedWord.length === 2 && wrongLetters.length >= 2){
        stars = 1;
    } else { if(selectedWord.length === 4 && wrongLetters.length >= 4){
        stars = 1;
    }else{
        stars = selectedWord.length - wrongLetters.length;
    }}
    
    return stars;

  }; */

  

  return (
    <>
      <Header />
      <div id="conteiner_global_jogo_forca">
      <div id="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} conqueredStars={stars({ wrongLetters, selectedWord })} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
      <Link to="/home"><button id="btn_voltar_home">Voltar</button></Link>
      </div>
    </>
  );
}

export default App;
