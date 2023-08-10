import React from 'react';

export const MemoGameSettings = ({
  memoCount,

  setMemoCount,
  startStopGame,
  gameStarted,
}) => {
  const memoCountOption = [
    { label: '8 elements', value: 8 },
    { label: '16 elements', value: 16 },
    { label: '20 elements', value: 20 },
  ];

  return (
    <>
      <div className="memoGameOptions">
        <p>A game of memorizing discovered tiles and pairing them together.</p>
        <div className="memoOptionsButtons">
          <div className="memoButtonsRows">
            <div>
              <h4>AMOUNT OF ELEMENTS</h4>

              {memoCountOption.map(({ label, value }) => (
                <button
                  className={
                    memoCount === Number(label[0]) ? 'activeButton' : ''
                  }
                  onClick={() => setMemoCount(value)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
              <h4>CONTROLS</h4>

              <button onClick={startStopGame}> {gameStarted ? 'STOP' : 'START'} </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoGameSettings;
