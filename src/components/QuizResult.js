import React from "react";

function QuizResult({ score, totalScore, tryAgain }) {
  return (
    <div className="result-container">
      <h2>
        {score / totalScore >= 0.5
          ? "Congratulations!"
          : "Oops, try next time!"}
      </h2>
      <p>
        Your Score: {score} / {totalScore}
      </p>
      <button className="retry-btn" onClick={tryAgain}>
        Try Again
      </button>
    </div>
  );
}

export default QuizResult;
