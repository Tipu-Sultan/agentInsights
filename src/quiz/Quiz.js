import React, { useContext, useEffect, useMemo, useState } from "react";
import { QuizContext } from "../context/QuizHolder";

//functions for suffled the questions
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const { quizArray } = useContext(QuizContext);

  //useMemo memoize the result, Shuffle the questions here
  const shuffledQuestions = useMemo(() => shuffleArray(quizArray), [quizArray]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 border shadow-lg rounded-md overflow-hidden bg-gray-300">
        <Box
          current={current}
          handler={setCurrent}
          shuffledQuestions={shuffledQuestions}
        />
      </div>
    </div>
  );
};

const Box = ({ current, handler, shuffledQuestions }) => {
  const { correct, setCorrect, setExit } = useContext(QuizContext);
  const [ans, setAns] = useState("");
  const [timer, setTimer] = useState(60); // Initial timer set to 60 seconds

  // Define a function to handle the timer
  const handleTimer = () => {
    if (timer === 0) {
      // Move to the next question if the timer runs out
      if (current + 1 < shuffledQuestions.length) {
        handler(current + 1);
        setTimer(60); // Reset the timer for the next question
      } else {
        setExit(true);
      }
    } else {
      setTimer(timer - 1); // Decrease the timer count by 1 second
    }
  };

  useEffect(() => {
    // Start the timer when the component mounts
    const timerId = setTimeout(handleTimer, 1000);

    // Clear the timer when the component unmounts or when the next question is loaded
    return () => clearTimeout(timerId);
  }, [timer, current, handler, shuffledQuestions]);

  if (!shuffledQuestions || !shuffledQuestions[current]) {
    // Add a guard clause to handle the case when shuffledQuestions is undefined or current is out of bounds.
    return (
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
          Question {current + 1}
        </h2>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4">
          Loading...
        </div>
      </div>
    );
  }

  const saveHandler = () => {
    if (shuffledQuestions[current].correctOption === ans) {
      setCorrect(correct + 1);
    }
    setAns("");

    if (current + 1 === shuffledQuestions.length) {
      setExit(true);
    } else {
      handler(current + 1);
    }
  };

  return (
    <div className="p-8 sm:p-6 md:p-8 lg:p-10">
      <div className="flex justify-between items-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Question {current + 1}/{shuffledQuestions.length}
        </h2>
        <div className="text-red-500 font-semibold">Timer: {timer} seconds</div>
      </div>

      <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4">
        {shuffledQuestions[current].question}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {shuffledQuestions[current].options.map((option, index) => (
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
