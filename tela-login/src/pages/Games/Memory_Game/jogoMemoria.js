import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react"

import "./estiloJogo.css"
import SingleCard from "./components/SingleCard"

import face1 from './imgs/Face1.jpg'


const cardImg = [
  { src: "../imgs/Face1.jpg", matched: false },
  { src: "../imgs/Face2.jpg", matched: false },
  { src: "../imgs/Face3.jpg", matched: false },
  { src: "../imgs/Face4.jpg", matched: false },
  { src: "../imgs/Face5.jpg", matched: false },
  { src: "../imgs/Face6.jpg", matched: false },
];

function JogoMemoria() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [stars, setStars] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //embaralha as cartas
  const shuffleCards = () => {
    const shuffledCards = [...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setStars(0);
  };

  //Lida com a escolha
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //Compara as cartas selecionadas
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              starsCount();
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reseta escolha
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  const starsCount = () => {
    setStars((stars) => stars + 1);
  }

  //start new game
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
  <div id="container_envelop">  
    <div id="Memoria_container">
      <h1 id="Titulo_jogo">Jogo da memória</h1>

      <p id="p_Jogadas">Jogadas: {turns}</p>
      <p id="p_Estrelas_Conquistadas">Estrelas conquistadas: {'\u2B50'} {stars}</p>

      <div id="card-grid">

        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <button id="btn_novo_jogo" onClick={shuffleCards}>Novo Jogo</button>
      
    </div>
    </div>
  );
}

export default JogoMemoria;
