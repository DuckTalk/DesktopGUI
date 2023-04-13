
const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const messageForm = document.querySelector('.message-form');
/*
  messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

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
  */
});
