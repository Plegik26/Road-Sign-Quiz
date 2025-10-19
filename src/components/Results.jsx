function Results({ score, setView, activeUser, setActiveUser }) {
  // function to handle logouts
  const handleLogout = () => {
    localStorage.removeItem("activeUser");
    setActiveUser(null);
    setView("login");
  };

  const passed = score >= 8;
  return (
    <div className="results-box">
      <h2>Results</h2>
      <p>
        User: <strong>{activeUser}</strong>
      </p>
      <p>Score: {score}/10</p>
      <h3>{passed ? "Pass!" : "Fail!"}</h3>
      <button onClick={() => setView("quiz")}>Retry</button>
      <button onClick={() => setView("homepage")}>Home</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Results;
