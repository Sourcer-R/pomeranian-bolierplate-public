import './styles.css';
import {IfStatements } from './IfStatements'

export const Exercise = () => {

    //const test = '' + '';
    const a=5;
    let b =2;
    const addResulst = a+b;
    const substResult= a-b;
    const multiplyResult= a*b;
    const divideResult= a/b;
    const moduloResult= a % b;
    const powerResult= a ** b;

//a = a+1
 //a +=1
//a = a-3

//a -=1
//------------------------------------------

const result1 = a>b;
const result2 = a<b;
const result3 = a<=b;
console.log('result',result2,result3);
// IF ------------------------------------------
//

const parseINT =parseInt ('5')
const parseINT_1 =parseInt ('5.5')
console.log (parseINT, 'parseINT')
console.log (parseINT_1, 'parseINT_1')

console.log(Math.round (5.6), 'Math.round()')
console.log (Math.ceil(.95));
console.log(Math.floor(4.8), 'Math.floor()')
console.log(Math.sqrt(8), 'Math.sqrt()')
console.log(Math.pow(8,9), 'Math.pow()')


  return ( 
  <>
  
  <div>addResulst{addResulst}</div>
  <div>substResult{substResult}</div>
  <div>multiplyResult{multiplyResult}</div>
  <div>divideResult{divideResult}</div>
  <div>moduloResult{moduloResult}</div>
  <div>powerResult{powerResult}</div>
<IfStatements/>
  </>

);}