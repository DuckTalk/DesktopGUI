const sendButton = document.getElementById('send-button');
const postButton = document.getElementById('post-button');
const loginButton = document.getElementById('login-button');
const getUserButton = document.getElementById('get-user-button');
const messageInput = document.getElementById('message-input');
const contactButton = document.getElementById('contact-button');
const chatButton = document.getElementById('chat-button');

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

getUserButton.addEventListener('click', function(event) {
    /*
    event.preventDefault();
    // Make a GET request to the API endpoint
    const apiUrl = 'http://ableytner.ddns.net:2006/api/user/test1';
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    */
    event.preventDefault();
    // Make a GET request to the API endpoint
    const apiUrl = 'http://ableytner.ddns.net:2006/api/user/test1';
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
    .then(data => {console.log(data)})
    
    .catch(error => console.error(error));
});



contactButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'contact.html';
});

chatButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
});
