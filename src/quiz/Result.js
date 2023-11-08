import React, { useContext } from "react";
import { QuizContext } from "../context/QuizHolder";

const Result = () => {
  const { correct, userAnswers, setExit, setStart, setCorrect } =
    useContext(QuizContext);
  const quizArray = useContext(QuizContext).quizArray;

  const playAgain = () => {
    setExit(false);
    setStart(false);
    setCorrect(0);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-gray-100 p-4 rounded-lg shadow-lg overflow-y-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Your Score: {correct} out of {quizArray.length}
        </h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 mb-4"
          onClick={playAgain}
        >
          Play Again
        </button>
        {quizArray.map((question, index) => (
          <div
            key={index}
            className="bg-white p-4 mb-4 border rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">
              {index + 1}. {question.question}
            </h3>
            <ul>
              {Object.entries(question.options).map(([option, text]) => (
                <li
                  key={option}
                  className={`${
                    userAnswers[index] === text
                      ? question.correctOption === text
                        ? "text-green-500"
                        : "text-red-500"
                      : question.correctOption === text
                      ? "text-green-500"
                      : "text-gray-600"
                  }`}
                >
                  {text}
                </li>
              ))}
            </ul>

            {/* Display the user's selected option */}
            <p className="text-md mt-4">
              Your selected option: {userAnswers[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
