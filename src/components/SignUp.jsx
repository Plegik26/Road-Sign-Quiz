import { useState } from "react";

// Signup component, recieves setView so that this component can change which page is displayed
function SignUp({ setView }) {
  //  declare state variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // user signup function
  const handleSignup = () => {
    // retrieve all users from local storage or return empty array if none exist
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check if username already exists
    if (users.find((u) => u.username === username)) {
      alert("Username already exists!");
      return;
    }

    const newUser = { username, password, attempts: [] };

    // add new user to users array
    users.push(newUser);
    // save updated users array to local storage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please log in.");
    setView("login");
  };

  return (
    <div className="auth-box">
      <h2>Sign Up</h2>
      <p>Enter your details to create an account.</p>
      {/* username input */}
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {/* password input */}
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* signup button */}
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account?
        <span className="text-link" onClick={() => setView("login")}>
          {" "}
          Login!
        </span>
      </p>
    </div>
  );
}

export default SignUp;
