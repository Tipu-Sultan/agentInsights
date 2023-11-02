import React, { useState } from 'react'
import { createContext } from 'react';
import quizArray from "../data/QuizData";

const QuizContext = createContext();

export default function Quiz(props){
  const [start,setStart] = useState(false);
  const [exit,setExit] = useState(false);
  const [correct,setCorrect] = useState(0);
  
  return (
    <div>
        <QuizContext.Provider value={{
          start,exit,setStart,setExit,quizArray,correct,setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    </div>
  )
}

export {QuizContext}