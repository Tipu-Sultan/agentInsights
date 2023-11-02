import React, { useContext } from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  { QuizContext } from "./context/QuizHolder";
import Start from "./quiz/Start";
import Quiz from "./quiz/Quiz";
import Result from "./quiz/Result";

const App = () => {
  const { start, exit } = useContext(QuizContext);
  return (
    <div>
      <React.Fragment>
        <Router>
          <Routes>
            {exit === false ? (
              <>
                {start === true ? (
                  <Route path="/" element={<Quiz />} />
                ) : (
                  <Route path="/" element={<Start />} />
                )}
              </>
            ) : (
              <Route path="/" element={<Result />} />
            )}

          </Routes>
        </Router>
      </React.Fragment>
    </div>
  );
};

export default App;