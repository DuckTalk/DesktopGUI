/* preload.js */
const { ipcRenderer } = require('electron');

document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById('login-button');
  sendButton.addEventListener('click', function () {
    // Make an HTTP request to the API endpoint
    const apiUrl = 'http://ableytner.ddns.net:2006/api/user/';
    const email = document.getElementById('emailInput').value;

    fetch(apiUrl + email, {
      method: 'GET'
    })
      .then(response => response.json())
      .then((data) => {
        console.log('api-response', data)
        if(data["error"]){
          console.log("Email not found")
        }
      })
      .catch(error => console.error(error));
  });

  const passwordInput = document.getElementById("password");
  const toggleButton = document.getElementById("toggle-password");

  toggleButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.textContent = "Hide password";
    } else {
      passwordInput.type = "password";
      toggleButton.textContent = "Show password";
    }
  });
});
