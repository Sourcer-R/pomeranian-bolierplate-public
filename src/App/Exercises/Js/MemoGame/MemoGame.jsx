import './styles.css';
import React, { useState, useEffect } from 'react';
import { MemoGameSettings } from './MemoGameSettings';
import MemoGameBoard from './MemoGameBoard';

const letters = [
  'A',

  'B',

  'C',

  'D',

  'E',

  'F',

  'G',

  'H',

  'I',

  'J',

  'K',

  'L',

  'M',

  'N',

  'O',

  'P',

  'Q',

  'R',

  'S',

  'T',

  'U',

  'V',

  'W',

  'X',

  'Y',

  'Z',
];

//const getRandomCards = (amount) => {};

//function createStageElement(character, index) {return { character, id: index, isGuessed: false, isVisible: false };}

export function MemoGame() {
  const CARDS_SPEED = 1000;
  

  
  const [memoCount, setMemoCount] = useState(8);
  const [defaultArrayState] = useState(Array(memoCount).fill({
    isGuessed: false,
    isVisible: false,
    value: 'A',
  }))
  
  const [timer, setTimer] = useState(0);
  const [moves, setMoves] =useState (0);
  const [openCards, setOpenCards] = useState([]);
  const [hideCards, setHideCards] = useState ([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [memoArray, setMemoArray] = useState(defaultArrayState);
  useEffect(() => {
    const randomLettersList = getRandomLetters(memoCount);


    
setMemoArray(Array(memoCount).fill({
  isGuessed: false,
  isVisible: false,
  value: 'A',
}).map((memoItem, index) => {
  const memoItemCopy = { ...memoItem };
  memoItemCopy.value = randomLettersList[index];
  return memoItemCopy;
}))

setGameStarted(false)
   setTimer(0)
  }, [memoCount]);

  useEffect(() => {
    let intervalId;

    if (!intervalId && gameStarted) {
      intervalId = setInterval(() => {
        setTimer((prevCountdown) => prevCountdown + 1);
      }, 1000);
    }
    if (timer === 60) {
     clearInterval(intervalId)
      setGameStarted(false);
    }
    return () => clearInterval(intervalId);
  }, [gameStarted, timer]);

  function handleCellClick() {
    setMoves((prevValue) => prevValue + 1);
  }

  function startStopGame() {
    setGameStarted((prevValue) => !prevValue);
    
  }

  const getRandomLetters = (lettersCount) => {
    const shuffled = [...letters].sort(() => 0.5 - Math.random());

    return [
      ...shuffled.slice(0, lettersCount / 2),
      ...shuffled.slice(0, lettersCount / 2),
    ];
  };

  return (
    <>
    {!gameStarted ? (
      <MemoGameSettings
        memoCount={memoCount}
        setMemoCount={setMemoCount}
        startStopGame={startStopGame}
        gameStarted={gameStarted}
      /> ) : null}

      <Timer time={timer} />
      <MovesCounter move={moves} />

      {gameStarted ? (
      <MemoGameBoard
        handleCellClick={handleCellClick}
        memoArray={memoArray}
        isStarted={gameStarted}
        
      /> ) : null}
    </>
  );
}const MovesCounter = ({move}) => {
    return <h4> MOVES
      <button className='boardButton'>{move}</button>  </h4>;
  }
const Timer = ({ time }) => {
  return <h4> GAME TIME 
    <button className='boardButton'>
    {time} </button> </h4>;

  
};

// const revealCards = (index) => {
  //   if (!memoArray[index].isVisible) return;
  //   setMemoArray((prevValue) =>
  //     prevValue.map((mole, i) => {
  //       const newMole = { ...mole };
  //       newMole.isVisible = index === i ? false : newMole.isVisible;
  //       return newMole;
  //     })
  //   );
  // setMemoArray(Array(memoCount).fill({ if (
  //   !memoArray[memoCount].isVisible
  // )return 
  //   isGuessed: false,
  //   isVisible: false,
  //   value: 'A',
  // }).map((memoItem, index) => {
  //   const memoItemCopy = { ...memoItem };
  //   memoItemCopy.value = randomLettersList[index];
  //   return memoItemCopy;
  // }))