const sendButton = document.getElementById('send-button');
const postButton = document.getElementById('post-button');
const messageInput = document.getElementById('message-input');

sendButton.addEventListener('click', function() {
    // Make a GET request to the API endpoint
    const apiUrl = 'http://ableytner.ddns.net:2006/api/user';
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

postButton.addEventListener('click', function() {
    // Make a POST request to the API endpoint
    const apiUrl = 'http://ableytner.ddns.net:2006/api/user';
    const requestBody = {
        message: messageInput.value
    };
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
