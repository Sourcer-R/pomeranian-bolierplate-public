import Mole from './mole.svg';
import './styles.css';

export const MoleGameBoard = ({ moleArray, hitTheMole, score, startStopGame }) => {
  return (
    <div className="moleGame">
     
      <div className='gameBoardCells'>
      <h4> CURRENT SCORE {score} </h4>
      


      <div className="stopButton">
      <h4>CONTROLS</h4>
      
      <button  onClick={startStopGame}>
        STOP
      </button>
</div>
</div>
      <div className="board">
        {moleArray.map((mole, index) => {
          return (
            <div className="cell">
              <span>
                {mole.isVisible ? (
                  <img
                    src={Mole}
                    onClick={() => hitTheMole(index)}
                    alt="mole upper part svg"
                  />
                ) : null}
              </span>
            </div>
          );
        })}
      
      </div>
    </div>
  );
};

export default MoleGameBoard;
