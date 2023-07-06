import './styles.css';
import React from 'react';
import Mole from './mole.svg';
import { useState } from 'react';

export const MoleGameSettings = () => {
  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime); //2000 * 60 Zeit
  const [moleCount, setMoleCount] = useState(1);

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
                className={moleCount === Number(label[0]) ? 'activeButton' : ''}
                onClick={() => setMoleCount(Number(label[0]))}
              >
                {label}
              </button>
            ))}
          </div>

          <div>
            <h4>CONTROLS</h4>

            <button>START</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export const MoleGameBoard = ({ moleArray, hitTheMole }) => {
  return moleArray.map((mole, index) => (
    <span>
      {mole.isVisible && (
        <img onClick={() => hitTheMole(index)} src={Mole} alt="" />
      )}
    </span>
  ));
};

export function HitTheMoleGame() {
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );

  function hitTheMole(index) {
    if (!moleArray[index].isWhacked) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
  }

  return (
    <>
      <MoleGameSettings />
      <MoleGameBoard moleArray={moleArray} hitTheMole={hitTheMole} />
    </>
  );
}
