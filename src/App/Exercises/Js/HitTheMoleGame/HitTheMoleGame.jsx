import './styles.css';

import React, { useState, useEffect } from 'react';

import { MoleGameBoard } from './MoleGameBoard';
import { MoleGameSettings } from './MoleGameSettings';

const CountdownTimer = ({ countdown }) => {
  return <h4> REMAINING TIME {countdown} seconds</h4>;
};

export function HitTheMoleGame() {
  const DEFAULT_GAME_TIME = 2 * 60 * 1000;
  const MOLE_SPEED = 1000;

  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
  const [gameTime, setGameTime] = useState(DEFAULT_GAME_TIME); //2000 * 60 Zeit
  const [moleCount, setMoleCount] = useState(1);
  const [score, setScore] = useState(0);
  const [countdown, setCountdown] = useState(gameTime / 1000);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!intervalId && gameStarted) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    if (countdown === 0) {
      setGameStarted(false);
    }
    return () => clearInterval(intervalId);
  }, [gameStarted, countdown]);

  useEffect(() => {
    let intervalId;

    if (!intervalId && gameStarted) {
      intervalId = setInterval(() => {
        showRandomMole();
      }, MOLE_SPEED);
    }
    return () => clearInterval(intervalId);
  }, [gameStarted]);

  useEffect(() => {
    if (!gameStarted) setCountdown(gameTime / 1000);
  }, [gameStarted, gameTime]);

  const hitTheMole = (index) => {
    if (!moleArray[index].isVisible) return;
    setMoleArray((prevValue) =>
      prevValue.map((mole, i) => {
        const newMole = { ...mole };
        newMole.isVisible = index === i ? false : newMole.isVisible;
        return newMole;
      })
    );
    setScore((score) => score + 1);
  };

  const showRandomMole = () => {
    const getRandomIntInclusive = (min, max) =>
      Math.floor(
        Math.random() * (Math.floor(max) - Math.ceil(min + 1)) + Math.ceil(min)
      );

    const random = getRandomIntInclusive(0, moleArray.length - 1);

    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, index) => {
        const updatedMole = { ...mole };
        updatedMole.isVisible = index === random;

        return updatedMole;
      })
    );
  };

  return (
    <>
      {!gameStarted ? (
        <MoleGameSettings
          gameTime={gameTime}
          moleCount={moleCount}
          setGameTime={setGameTime}
          setMoleCount={setMoleCount}
          startStopGame={() => setGameStarted((prev) => !prev)}
          gameStarted={gameStarted}
        />
      ) : null}

      {gameStarted ? <CountdownTimer countdown={countdown} /> : null}

      {gameStarted ? (
        <MoleGameBoard
          moleArray={moleArray}
          hitTheMole={hitTheMole}
          score={score}
        />
      ) : null}
    </>
  );
}
