import React from 'react';

const ResetGame = ({ setScore, setAnsOption }) => {


  const restartGame = () => {
    setScore(0);
    setAnsOption(true);
  }

  const handleRestartGame = () => {
    restartGame();
  }

  return (
    // <button onClick={() => restartGame()}>Reset Game</button>
    <button className='play-again' onClick={handleRestartGame}>Play Again</button>
  )
}
export default ResetGame;