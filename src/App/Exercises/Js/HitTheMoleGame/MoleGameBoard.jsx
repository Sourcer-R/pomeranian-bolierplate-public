import Mole from './mole.svg';

const MoleGameBoard = ({ moleArray, hitTheMole, scoreCount }) => {
  return (
    <div className="moleGame">
       <h4> currentScore = {scoreCount}</h4>
      {moleArray.map((mole, index) => {
        <div>
          <span>
            {mole.isVisible ? (
              <img src={Mole} onClick={() => hitTheMole(index)} />
            ) : null}
          </span>
        </div>;
      })}
    </div>
  );
};

export default MoleGameBoard;
