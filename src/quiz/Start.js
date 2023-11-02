import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizHolder';

const Start = () => {
  const { setStart } = useContext(QuizContext);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz</h1>
        <p className="text-lg mb-8">Are you ready to test your knowledge?</p>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition-transform transform hover:scale-105"
          onClick={() => setStart(true)}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default Start;
