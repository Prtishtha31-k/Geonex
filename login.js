function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  error.innerText = "";

  const correctUsername = "admin";
  const correctPassword = "1234";

  if (username === correctUsername && password === correctPassword) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  } else {
    error.innerText = "Invalid username or password!";
  }
}