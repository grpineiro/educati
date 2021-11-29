import { useContext } from 'react';

import { GameContext } from '../context/GameContext';

export default function Winner() {
  const { whoIsWinner } = useContext(GameContext);

  if (!whoIsWinner) return <></>;
  return <p className="winner" id="winner">{whoIsWinner} ganhou!!!</p>;
}
