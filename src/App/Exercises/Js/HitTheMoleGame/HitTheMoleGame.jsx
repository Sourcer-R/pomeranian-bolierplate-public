import './styles.css';

import React, { useState, useEffect } from 'react';

import { MoleGameBoard } from './MoleGameBoard';
import { MoleGameSettings } from './MoleGameSettings';


//const Summary = ({scoreCount}) => {
  //return <h4> Your Score is: {scoreCount}</h4>}

  const CountdownTimer = ({countdown}) => {
    return <h4> Remaining time: {countdown} seconds</h4>
  };

export function HitTheMoleGame() {
  const defaultGameTime = 2 * 60 * 1000;
  const moleSpeed = 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime); //2000 * 60 Zeit
  const [moleCount, setMoleCount] = useState(1);
  const [scoreCount, setScoreCount] = useState(0);
  const [seconds, setSeconds] = useState(gameTime / 1000);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isWhacked: false })
  );
const [countdown, setCountdown] = useState (seconds);
const [gameStarted, setGameStarted] = useState (false);


useEffect(() => {

  if (!countdown) return;
  let intervalId;

  if (!intervalId) {
    intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown  - 1);
    }, 1000);
  }

  return () => clearInterval(intervalId);
}, [seconds, gameStarted]);

  useEffect(() => {
    let intervalId;

    if (!intervalId) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [seconds]);

  useEffect(() => {
    let intervalId;

    if (!intervalId) {
      intervalId = setInterval(() => {
       showRandomMole();
      }, moleSpeed);
    }

    console.log(seconds.toString().padStart(2, 0));

    return () => clearInterval(intervalId);
  }, []);

  function hitTheMole(index) {
    if (!moleArray[index].isWhacked) return;
    moleArray[index].isWhacked = !moleArray[index].isWhacked;
  }

  function showRandomMole() {
    function getRandomIntInclusive(min, max) {
      //const random = Math.random(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);

      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const random = getRandomIntInclusive(0, moleArray.length - 1);

    console.log (random)
    setMoleArray((previousMoleArray) =>
      previousMoleArray.map((mole, index) => {
        const updatedMole = {...mole}
        updatedMole.isVisible = index === random;

        
        return updatedMole;
      })
    );
  }
  return (
    <>
      <MoleGameSettings
        gameTime={gameTime}
        moleCount={moleCount}
        setGameTime={setGameTime}
        setMoleCount={setMoleCount}
        startStopGame={() => setGameStarted (prev => !prev)}
        gameStarted = {gameStarted}
      />

{gameTime !== seconds*1000 && seconds !== 0 ? ( 
      
      <MoleGameBoard
        moleArray={moleArray}
        hitTheMole={hitTheMole}
        scoreCount={scoreCount}
      /> ): null}

<CountdownTimer countdown = {countdown} />
      <button onClick={() => showRandomMole()}> HIT ME NOW </button>

      

      
    </>
  );
}
