// preload.js
const loginButton = document.getElementById('login-button');
const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
const sendButton = document.getElementById('login-button');

sendButton.addEventListener('click', function() {
// Make an HTTP request to the API endpoint
const apiUrl = 'http://ableytner.ddns.net:2006/api/user/test2';
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
/*fetch(apiUrl, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      type: 'user',
      data: {
        username: 'testuser',
        email: 'test@gmail.com',
        pw_hash: 'empty1',
        salt: '1h2jk2n'
      }
  })
})

.then(response => response.json())
.then(data => console.log('api-response', data))
.catch(error => console.error(error));
*/
fetch(apiUrl, {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json'
  },
  json: JSON.stringify({
      type: 'user',
      auth: {
        type: 'token',
        token: ''
      },
      data: {
        user_id: 1
      }

  })
})
.then(response => response.json())
.then(data => {
  console.log(data); // log the response data to the console
  // Send the data back to the main process
  ipcRenderer.send('api-response', data);
})
.catch(error => console.error(error));
});
})
