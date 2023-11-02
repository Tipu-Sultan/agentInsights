import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizHolder';

const Result = () => {
  const { correct, quizArray, setExit, setStart, setCorrect } = useContext(QuizContext);

  const playAgain = () => {
    setExit(false);
    setStart(false);
    setCorrect(0);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-4/5 sm:w-2/3 lg:w-1/2 border shadow-lg rounded-md overflow-hidden bg-white text-center p-6">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          Your Score: {correct} out of {quizArray.length}
        </h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105"
          onClick={playAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Result;
