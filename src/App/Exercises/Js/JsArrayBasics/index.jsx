

const JsArrayBasics = () => {

  const data = new Array ();
  const uniqueData = new Set ();

  data.push('Lukas'); 
  data.push('John'); 
  data.push('John'); 

  uniqueData.add('Lukas');
  uniqueData.add('John');
  uniqueData.add('John');

  console.log ((data, uniqueData))
  return <div>Change me X</div>;
};

export default JsArrayBasics;