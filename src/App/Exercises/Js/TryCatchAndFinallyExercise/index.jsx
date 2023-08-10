import { useState } from 'react';
import './styles.css';
import {ApiCallExercise} from './ApiCall'

export function TryCatchAndFinallyExercise() {

  const [getPosts, setPosts] = useState()
  return (<div className='container--try-catch'>
    <ApiCallExercise/> </div>);

   
};
