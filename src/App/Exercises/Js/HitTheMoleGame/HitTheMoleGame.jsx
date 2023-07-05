import './styles.css';
import React from 'react';
import Mole from './mole.svg';
import { useState } from 'react';

export function HitTheMoleGame() {
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );

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

  function hitTheMole(index) {
    if (!moleArray[index].isWhacked) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
  }

  return (
    <div>

      <p className='paragraf-header' >A game of following the mole and hitting the square where it appeared. </p>
      <p> AMOUNT OF MOLES {moleCount}</p>

      {moleCountOption.map(({ label }) => (
        <button onClick={() => setMoleCount(Number(label[0]))}>{label}</button>
      ))}

      <p className='game-time'>
        GAME TIME {gameTime / 60 / 1000}
        {gameTime > 1 * 60 * 1000 ? ' minutes' : ' minute'}
      </p>
      {gameTimeOption.map(({ label, timeValue }) => (
        <button onClick={() => setGameTime(timeValue)}> {label} </button>
      ))}

      {moleArray.map((mole, index) => (
        <span>
          {mole.isVisible && (
            <img onClick={() => hitTheMole(index)} src={Mole} alt="" />
          )}
        </span>
      ))}

      <p> CONTROLS</p>
<div className='controls-button'>
      <button>START</button></div>
    </div>
  );
}
