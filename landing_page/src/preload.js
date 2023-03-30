// preload.js

const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', function() {
      // Make an HTTP request to the API endpoint
      const apiUrl = 'http://ableytner.ddns.net:2006/api/user';
      fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Send the data back to the main process
          ipcRenderer.send('api-response', data);
      })
      .catch(error => console.error(error));
  });
})
