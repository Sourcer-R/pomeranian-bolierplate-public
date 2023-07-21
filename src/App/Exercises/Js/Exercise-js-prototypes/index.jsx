import './styles.css';

export function JSPrototypes ()  {

  function Car (make, model) {
    this.make=make;
    this.model=model;
  }

  Object.prototype.getMake=function(){
    return this.make
  }

  Object.prototype.getModel=function(){
    return this.model
  }

  const myCar=new Car ('Toyota', 'Camry');
  const myCarTwo=new Car ('Fiat', '500');

  
  return <div className='container--js-prototype'>
    Make: {myCar.getMake()}
    Model: {myCar.getModel()}
    Make: {myCarTwo.getMake()}
    Model: {myCarTwo.getModel()}
    </div>;
};
