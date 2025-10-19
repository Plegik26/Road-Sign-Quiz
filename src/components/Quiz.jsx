import { useEffect, useState, useRef } from "react";
import { questions } from "../data/questions";

// Quiz component, receives setView to change which page is displayed
// activeUser to know which user is currently logged in
// setScore to set the score after quiz is completed
function Quiz({ setView, activeUser, setScore }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(180);
  const answersRef = useRef(answers);

  // keep a ref in sync so timer callbacks can read latest answers
  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  // Timer logic
  useEffect(() => {
    // timer that runs every second
    const timer = setInterval(() => {
      // function to tick the timer down
      setTimeLeft((prev) => {
        // if time runs out, stop and submit the quiz
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        // otherwise continue countdown
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // function to handle answer selection
  const userSelect = (option) => {
    setAnswers({ ...answers, [current]: option });
  };

  // function to go to next question
  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  // function to go to previous question
  const prevQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  // function to submit the quiz
  const handleSubmit = () => {
    const correctCount = questions.reduce((acc, q, index) => {
      // If the user's answer for this question matches the correct answer, add 1 to the score
      if (answersRef.current[index] === q.correct) {
        return acc + 1;
      }
      return acc;
    }, 0);

    // set the score and change view to results
    setScore(correctCount);
    saveAttempt(correctCount);
    setView("results");
  };

  // function to save the user's attempt to local storage
  const saveAttempt = (score) => {
    // retrieve users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // create new array of users
    const updatedUsers = users.map((u) => {
      // if its the active user
      if (u.username === activeUser) {
        // add a new attempt with the current date and score
        const newAttempt = {
          score,
          date: new Date().toLocaleString(), // adds timestamp
        };
        // Return updated user data
        return { ...u, attempts: [...u.attempts, newAttempt] };
      }
      return u; // unchanged user
    });
    // save updated users array to local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // current question
  const q = questions[current];

  return (
    <div className="quiz-box">
      <h4>Time Left: {timeLeft}s</h4>
      <h2>
        Question {current + 1} of {questions.length}
      </h2>

      <div className="quiz-content">
        <h3 className="quiz-text">{q.question}</h3>
        <img src={q.image} alt="traffic sign" className="quiz-image" />
      </div>

      <div className="answers-grid">
        {q.options.map((opt, i) => (
          <button
            key={i}
            className={answers[current] === opt ? "selected" : ""}
            onClick={() => userSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="quiz-nav">
        {current > 0 && <button onClick={prevQuestion}>Previous</button>}
        {current < questions.length - 1 ? (
          <button onClick={nextQuestion}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
