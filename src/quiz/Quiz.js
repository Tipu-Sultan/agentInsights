import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/QuizHolder";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const { quizArray } = useContext(QuizContext);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 border shadow-lg rounded-md overflow-hidden bg-gray-300">
        <Box current={current} handler={setCurrent} quizArray={quizArray} />
      </div>
    </div>
  );
};

const Box = ({ current, handler, quizArray }) => {
  const { correct, setCorrect, setExit, userAnswers, setUserAnswers } = useContext(
    QuizContext
  );
  const [ans, setAns] = useState("");
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        // Time's up, proceed to the next question
        setTimer(60); // Reset the timer to your initial time
        if (current + 1 === quizArray.length) {
          setExit(true);
        } else {
          handler(current + 1);
        }
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [timer, handler, current, quizArray, setExit]);

  const saveHandler = () => {
    if (ans !== "") {
      const currentQuestion = quizArray[current];
      if (currentQuestion.correctOption === ans) {
        setCorrect(correct + 1);
      }

      // Create a copy of the userAnswers array and update the answer for the current question
      const updatedUserAnswers = [...userAnswers];
      updatedUserAnswers[current] = ans;

      setUserAnswers(updatedUserAnswers);
    }

    setAns("");

    // Reset the timer when moving to the next question
    setTimer(60);

    if (current + 1 === quizArray.length) {
      setExit(true);
    } else {
      handler(current + 1);
    }
  };

  const previousHandler = () => {
    if (current > 0) {
      handler(current - 1);
      setAns(userAnswers[current - 1]);
    }
  };

  return (
    <div className="p-8 sm:p-6 md:p-8 lg:p-10">
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Question {current + 1}/{quizArray.length}
        </h2>
        <div className="text-red-500 font-semibold">Timer: {timer} seconds</div>
      </div>

      <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4">
        {quizArray[current].question}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quizArray[current].options.map((option, index) => (
          <div
            key={index}
            className={`p-2 sm:p-3 md:p-4 lg:p-5 border rounded cursor-pointer ${
              ans === option
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100 hover:text-blue-600"
            }`}
            onClick={() => setAns(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-4">
        <div
          className="px-3 py-2 bg-orange-500 text-white cursor-pointer rounded mb-2 sm:mb-0"
          onClick={() => setAns("")}
        >
          Reset
        </div>
        <div
          className="px-3 py-2 bg-green-500 text-white cursor-pointer rounded ml-0 mt-2 sm:ml-2 sm:mt-0"
          onClick={saveHandler}
        >
          Save & Next
        </div>
        <div
          className="px-3 py-2 bg-blue-500 text-white cursor-pointer rounded ml-0 mt-2 sm:ml-2 sm:mt-0"
          onClick={previousHandler}
        >
          Previous
        </div>
        <div
          className="px-3 py-2 bg-red-500 text-white cursor-pointer rounded ml-0 mt-2 sm:ml-2 sm:mt-0"
          onClick={() => setExit(true)}
        >
          Exit
        </div>
      </div>
    </div>
  );
};

export default Quiz;
