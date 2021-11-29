import GameContextProvider from './context/GameContext';
import Board from "./components/Board"

import "./style.css";

function Velha() {

  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}

export default Velha;
