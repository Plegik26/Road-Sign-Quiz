function Homepage({ setView, activeUser }) {
  return (
    <div className="homepage-container">
      <h1>Hello {activeUser}!</h1>
      <p>Welcome to the Quiz App. Ready to test your knowledge?</p>
      <button onClick={() => setView("quiz")}>Start Quiz</button>
      <button onClick={() => setView("history")}>View Test History</button>
      <button onClick={() => setView("login")}>Log Out</button>
    </div>
  );
}

export default Homepage;
