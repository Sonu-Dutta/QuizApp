import React, { useState } from "react";
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";
// import "./Quiz.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = (direction) => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (direction === "next") {
      if (currentQuestion < QuizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setClickedOption(0);
      } else {
        setShowResult(true);
      }
    } else if (direction === "prev" && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setClickedOption(0);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      <p className="heading-txt">React Quiz</p>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => (
                <button
                  className={`option-btn ${
                    clickedOption === i + 1 ? "checked" : ""
                  }`}
                  key={i}
                  onClick={() => setClickedOption(i + 1)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="navigation-buttons">
              <button
                className="nav-btn"
                onClick={() => changeQuestion("prev")}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              <button
                className="nav-btn"
                onClick={() => changeQuestion("next")}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
