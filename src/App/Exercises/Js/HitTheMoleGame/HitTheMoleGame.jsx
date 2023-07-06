import './styles.css';

import React, { useState, useEffect } from 'react';

import { MoleGameBoard } from './MoleGameBoard';
import { MoleGameSettings } from './MoleGameBoard';

export function HitTheMoleGame() {
  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime); //2000 * 60 Zeit
  const [moleCount, setMoleCount] = useState(1);
  const [scoreCount, setScoreCount] = useState(0);
  const [seconds, setSeconds] = useState(gameTime / 1000);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );

  useEffect(() => {
    let intervalId;

    if (!intervalId) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    console.log(seconds.toString().padStart(2, 0));

    return () => clearInterval(intervalId);
  }, [seconds]);

  function hitTheMole(index) {
    if (!moleArray[index].isWhacked) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
  }

  return (
    <>
      <MoleGameSettings
        gameTime={gameTime}
        moleCount={moleCount}
        setGameTime={setGameTime}
        setMoleCount={setMoleCount}
      />
      <MoleGameBoard moleArray={moleArray} hitTheMole={hitTheMole} scoreCount={scoreCount} />
    </>
  );
}
