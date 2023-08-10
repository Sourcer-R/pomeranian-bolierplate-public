import './styles.css';

const MemoGameBoard = ({ memoArray, isStarted, handleCellClick,moves }) => {
  return (
    <div className="memoGame">

<div >


      
      


      <div className="stopButton">
      <h4>CONTROLS

      <button  onClick={isStarted}>
        PASS
      </button>
</h4>
      </div>
        </div>
      
        <div className='board'>
          <div className='memoCells'>
      {isStarted &&
        memoArray.map(({ isGuessed, isVisible, value }) => {
          return <div className="cell" onClick={() => handleCellClick()}>{value}</div>;
        })}
     </div>
        </div>
        </div>
  );

  
};

export default MemoGameBoard;
