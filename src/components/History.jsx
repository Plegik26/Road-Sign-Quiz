import { useEffect, useState } from "react";

function History({ setView, activeUser }) {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.username === activeUser);
    if (user && user.attempts) {
      setAttempts(user.attempts);
    }
  }, [activeUser]);

  return (
    <div className="results-box">
      <h2>{activeUser}'s Test History</h2>
      {attempts.length === 0 ? (
        <p>No previous tests yet.</p>
      ) : (
        <ul>
          {attempts.map((a, i) => (
            <li key={i}>
              <strong>{a.date}</strong>
              <span className="score"> Score: {a.score}/10</span>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => setView("homepage")}>Back</button>
    </div>
  );
}

export default History;
