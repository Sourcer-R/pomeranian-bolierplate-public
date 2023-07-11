import React from 'react';

export const MoleGameSettings = ({
  gameTime,
  moleCount,
  setGameTime,
  setMoleCount,
  startStopGame,
  gameStarted,
}) => {
  const gameTimeOption = [
    { label: '1 minute', timeValue: 1 * 60 * 1000 },
    { label: '2 minutes', timeValue: 2 * 60 * 1000 },
    { label: '3 minutes', timeValue: 3 * 60 * 1000 },
  ];

  const moleCountOption = [
    { label: '1 mole' },
    { label: '2 moles' },
    { label: '3 moles' },
  ];

  return (
    <>
      <div className="moleGameOptions">
        <p>
          A game of following the mole and hitting the square where it appeared.
        </p>
        <div className="gameOptionsButtons">
          <div className="gameButtonsRows">
            <div>
              <h4>GAME TIME</h4>

              {gameTimeOption.map(({ label, timeValue }) => (
                <button
                  className={gameTime === timeValue ? 'activeButton' : ''}
                  onClick={() => setGameTime(timeValue)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
              <h4>AMOUNT OF MOLES</h4>

              {moleCountOption.map(({ label }) => (
                <button
                  className={
                    moleCount === Number(label[0]) ? 'activeButton' : ''
                  }
                  onClick={() => setMoleCount(Number(label[0]))}
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
              <h4>CONTROLS</h4>

              <button onClick={startStopGame}> START </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoleGameSettings;
