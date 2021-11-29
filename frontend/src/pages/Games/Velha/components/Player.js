import { useContext } from 'react';

import { GameContext } from '../context/GameContext';

export default function Player() {
  const { isXNext } = useContext(GameContext);

  return <h1>Jogador: {isXNext ? 'X' : 'O'}</h1>;
}
