import Mole from './mole.svg';
import './styles.css';

export const MoleGameBoard = ({ moleArray, hitTheMole, score }) => {
  return (
    <div className="moleGame">
      <h4> CURRENT SCORE = {score}</h4>

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
