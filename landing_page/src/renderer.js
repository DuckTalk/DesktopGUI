document.addEventListener('DOMContentLoaded', function() {
        // Your code goes here
    

    const getUserButton = document.getElementById('get-user-button');
    const messageInput = document.getElementById('message-input');


    const apiUrl = 'http://ableytner.ddns.net:2006/api/group/test';
1
    // Function to fetch member details by user_id
    function fetchMemberDetails(memberId) {
        const url = `http://ableytner.ddns.net:2006/api/user/${memberId}`;
        return fetch(url).then(response => response.json());
    }
    
    // Make a GET request to the API endpoint to get the group information
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Create an HTML element to display the group name
            const groupNameElement = document.createElement('h2');
            groupNameElement.innerHTML = `${data.data.groupname}`;
            document.getElementById('group-contacts').appendChild(groupNameElement);
    
            // Create an HTML element to display the group description
            const groupDescriptionElement = document.createElement('p');
            groupDescriptionElement.innerHTML = `${data.data.description}`;
            document.getElementById('group-contacts').appendChild(groupDescriptionElement);
    
            // Extract member IDs from the members object
            const memberIds = [...Object.values(data.data.members).map(member => member.user_id)];
    
            // Fetch member details for each member ID
            const memberDetailsPromises = memberIds.map(fetchMemberDetails);
            return Promise.all(memberDetailsPromises);
        })
        .then(memberDetails => {
            // Check that memberDetails is an array
            if (Array.isArray(memberDetails)) {
                // Create an HTML element to display the members
                const membersElement = document.createElement('ul');
                for (const member of memberDetails) {
                    const memberElement = document.createElement('li');
                    memberElement.innerHTML = `${member.data.username}`;
                    membersElement.appendChild(memberElement);
                }
                document.getElementById('group-contacts').appendChild(membersElement);
                console.error('Output:', memberDetails);

            } else {
                console.error('Member details is not an array:', memberDetails);
            }
        })
        .catch(error => console.error(error));
    
    getUserButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Make a GET request to the API endpoint
        const apiUrluser = 'http://ableytner.ddns.net:2006/api/user/test1';
        fetch(apiUrluser)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        
        event.preventDefault();
        // Make a GET request to the API endpoint
        const apiUrlgroup = 'http://ableytner.ddns.net:2006/api/group/test';
        fetch(apiUrlgroup, {
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




    const postButton = document.getElementById('sendmessage-button');
    postButton.addEventListener('click', () => {
    // Beitrag an das Backend senden
    const url = 'http://ableytner.ddns.net:2006/api/message';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({ 
            data:{
                sender_id: 3, 
                receiver: {
                    type:"user",
                    user_id: 4
                },
                content: messageInput.value
            }
         }),
        headers: {
        'Content-Type': 'application/json'
        }
    })
        .then(response => {
        // Erfolgsfall
        console.log('Beitrag erfolgreich gesendet');
        console.log(response.json())
        })
        .catch(error => {
        // Fehlerfall
        console.error('Fehler beim Senden des Beitrags:', error);
        });
    });
    
    const contactButton = document.getElementById("contact-button");

    contactButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "contact.html";
    });

    const chatButton = document.getElementById("chat-button");


    chatButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "index.html";
    });

});