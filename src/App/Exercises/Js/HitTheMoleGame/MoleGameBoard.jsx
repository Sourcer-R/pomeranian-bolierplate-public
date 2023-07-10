import Mole from './mole.svg';
import './styles.css';


export const MoleGameBoard = ({ moleArray, hitTheMole, scoreCount }) => {
  return (
    <div className="moleGame">
       <h4> CURRENT SCORE = {scoreCount}</h4>

       <div className='board'>
      {moleArray.map((mole, index) => {
        return (
        <div className='cell'>
          <span >
            {mole.isVisible ? (
              <img src={Mole} onClick={() => hitTheMole(index)} />
            ) : null}
          </span>
        </div>)
      })}
      </div>
    </div>
  );
};

export default MoleGameBoard;
