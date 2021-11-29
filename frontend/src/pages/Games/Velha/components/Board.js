import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import uuid from 'uuid/v4';

import { GameContext } from "../context/GameContext";

import Square from './Square';
import Player from './Player';
import Reset from './Reset';
import Winner from './Winner';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board() {
  const { squares, setWhoIsWinner } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      setWhoIsWinner(winner);
    }
  }, [setWhoIsWinner, squares]);

  return (
   <div id="container_app_global">
    <div className="board-container" id="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board" id="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={`${Math.random()}`} />
        ))}
      </div>

      <br />
      <Link to="/home"><button type="button" className="btn btn-danger btn-lg active" >Voltar</button></Link>      
    </div>
    </div> 
  );
}
