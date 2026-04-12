// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  // If already logged in → go directly to home
  if (localStorage.getItem("loggedIn") === "true") {
    window.location.href = "home.html";
  }
});

function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const error = document.getElementById("error");

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Clear previous error
  error.innerText = "";

  // Dummy credentials
  const correctUsername = "admin";
  const correctPassword = "1234";

  // Validation
  if (username === "" || password === "") {
    error.innerText = "Please fill all fields!";
    return;
  }

  // Check credentials
  if (username === correctUsername && password === correctPassword) {
    // Save login state
    localStorage.setItem("loggedIn", "true");

    // Optional: store username
    localStorage.setItem("user", username);

    // Redirect to home page
    window.location.href = "home.html";
  } else {
    error.innerText = "Invalid username or password!";
  }
}