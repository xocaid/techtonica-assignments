import React from 'react';

const ResetGame = ({ setScore, setAnsOption }) => {


  const restartGame = () => {
    setAnsOption(true);
  }

  return (
    // <button onClick={() => restartGame()}>Reset Game</button>
    <button className='play-again' onClick={handleRestartGame} >Play Again</button>
  )
}
export default ResetGame;