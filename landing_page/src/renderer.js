const sendButton = document.getElementById('send-button');
const postButton = document.getElementById('post-button');
const loginButton = document.getElementById('login-button');
const getUserButton = document.getElementById('get-user-button');

const messageInput = document.getElementById('message-input');

sendButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Make a GET request to the API endpoint
    const apiUrl = 'http://ableytner.ddns.net:2006/api/user';
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

postButton.addEventListener('click', function(event) {
    event.preventDefault();
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

loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Make a POST request to the API endpoint
    const apiUrl = 'http://ableytner.ddns.net:2006/api/user';
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: 'user',
            data: {
                username: 'shala',
                email: 'test2@gmail.com',
                pw_hash: 'empty1',
                salt: '1h2jk2n'
            }
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
/*
getUserButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Make a GET request to the API endpoint for the specified user ID
    const apiUrl = 'http://ableytner.ddns.net:2006/api/user';
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            type: 'user',
            auth: {
                type: 'token',
                token: ''
            },
            data: {
                user_id: '1'
            }
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
getUserButton.addEventListener('click', function(event) {
    event.preventDefault();
    const userId = '1';
    // Construct the API endpoint URL with query parameters for the GET request
    const apiUrl = `http://ableytner.ddns.net:2006/api/user?type=user&auth={"type":"token","token":""}&data={"user_id":${userId}}`;
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
*/