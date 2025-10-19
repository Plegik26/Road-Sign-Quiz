import { useState } from "react";

// Login component, recieves setView so that this component can change which page is displayed
// and setActiveUser to set the user who is currently logged in
function LoginForm({ setView, setActiveUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login
  const handleLogin = () => {
    // Get users from local storage or return empty array if none exist
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Check if user exists with matching username and password
    const found = users.find(
      (u) => u.username === username && u.password === password
    );

    // if no user found alert user
    if (!found) {
      alert("Invalid credentials!");
      return;
    }

    // If user found, set them as active user in local storage and display quiz
    localStorage.setItem("activeUser", JSON.stringify(found.username));
    setActiveUser(found.username);
    setView("homepage");
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>
      <p>Enter your credentials to log in.</p>
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
      {/* login button */}
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?
        <span className="text-link" onClick={() => setView("signup")}>
          {" "}
          Sign up!
        </span>
      </p>
    </div>
  );
}

export default LoginForm;
