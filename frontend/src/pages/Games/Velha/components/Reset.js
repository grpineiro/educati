import { useContext } from 'react';

import { GameContext } from '../context/GameContext';

export default function Board() {
  const { setSquares, setIsXNext, setWhoIsWinner } = useContext(
    GameContext
  );

  function handleClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWhoIsWinner('');
  }

  return (
    <p className="reset" id="reset">
      <button type="button" onClick={handleClick}>
        Reiniciar
      </button>
    </p>
  );
}
