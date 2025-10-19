import { useState } from "react";
import LogIn from "./components/LogIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Quiz from "./components/Quiz.jsx";
import Results from "./components/Results.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import History from "./components/History.jsx";
import Homepage from "./components/Homepage.jsx";

function App() {
  const [view, setView] = useState("login");
  // stores user who is currently logged in
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("activeUser"))
  );
  const [score, setScore] = useState(null);

  return (
    <>
      <Header />
      {/* Change views based on state */}

      {view === "signup" && <SignUp setView={setView} />}

      {view === "homepage" && (
        <Homepage setView={setView} activeUser={activeUser} />
      )}

      {view === "login" && (
        <LogIn setView={setView} setActiveUser={setActiveUser} />
      )}

      {view === "quiz" && (
        <Quiz setView={setView} activeUser={activeUser} setScore={setScore} />
      )}

      {view === "results" && (
        <Results
          score={score}
          setView={setView}
          activeUser={activeUser}
          setActiveUser={setActiveUser}
        />
      )}

      {view === "history" && (
        <History setView={setView} activeUser={activeUser} />
      )}

      <Footer />
    </>
  );
}

export default App;
