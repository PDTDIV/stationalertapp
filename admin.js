// JavaScript for the admin page

// Function to send emergency message to login page
document.getElementById('sendEmergencyLoginMessage').addEventListener('click', function() {
    const emergencyLoginMessage = document.getElementById('emergencyLoginMessage').value;
    localStorage.setItem('emergencyLoginMessage', emergencyLoginMessage);
});

// Function to send emergency message to individual/multiple users
document.getElementById('sendEmergencyUserMessage').addEventListener('click', function() {
    const selectedUsers = Array.from(document.getElementById('selectedUsers').selectedOptions).map(option => option.value);
    const emergencyUserMessage = document.getElementById('emergencyUserMessage').value;
    const emergencyMessage = { users: selectedUsers, message: emergencyUserMessage };
    localStorage.setItem('emergencyUserMessage', JSON.stringify(emergencyMessage));
});

// Function to retrieve messages sent by users
function retrieveMessagesFromUsers() {
    // Retrieve messages from local storage using the same key used by users
    return JSON.parse(localStorage.getItem('userMessages')) || [];
}

// Function to display messages on the admin interface
function displayMessagesFromUsers(messages) {
    const userMessagesContainer = document.getElementById('userMessages');
    // Clear previous messages
    userMessagesContainer.innerHTML = '';
    // Loop through messages and display each message with date, time, and details
    messages.forEach(message => {
        const p = document.createElement('p');
        p.textContent = `${message.timestamp}: ${message.content} - ${message.userDetails}`;
        // Add reply button for each message
        const replyButton = document.createElement('button');
        replyButton.textContent = 'Reply';
        replyButton.addEventListener('click', function() {
            // Implement reply functionality here
            alert(`Reply to user: ${message.userDetails}`);
        });
        p.appendChild(replyButton);
        userMessagesContainer.appendChild(p);
    });
}

// Function to populate the dropdown menu with usernames
function populateUserDropdown() {
    const selectedUsersDropdown = document.getElementById('selectedUsers');
    const users = [
        { username: 'user1', password: '123' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' },
        { username: 'user4', password: 'password4' },
        { username: 'user5', password: 'password5' },
        { username: 'user6', password: 'password6' }
    ];

    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.username;
        option.textContent = user.username;
        selectedUsersDropdown.appendChild(option);
    });
}

// Call the function to populate the dropdown menu
populateUserDropdown();

// Function to send emergency message to individual/multiple users
document.getElementById('sendEmergencyUserMessage').addEventListener('click', function() {
    console.log("Send button clicked"); // Check if the event listener is working
    
    const selectedUsers = Array.from(document.getElementById('selectedUsers').selectedOptions).map(option => option.value);
    console.log("Selected Users:", selectedUsers); // Check if the selected users are retrieved correctly
    
    const emergencyUserMessage = document.getElementById('emergencyUserMessage').value;
    console.log("Emergency Message:", emergencyUserMessage); // Check if the emergency message is retrieved correctly
    
    const emergencyMessage = { users: selectedUsers, message: emergencyUserMessage };
    console.log("Emergency Message Object:", emergencyMessage); // Check the final emergency message object
    
    localStorage.setItem('emergencyUserMessage', JSON.stringify(emergencyMessage));
});

// Retrieve and display messages when admin logs in
window.onload = function() {
    const userMessages = retrieveMessagesFromUsers();
    if (userMessages.length > 0) {
        displayMessagesFromUsers(userMessages);
    }
};

// JavaScript for the logout button
document.getElementById('logoutButton').addEventListener('click', function() {
    // Redirect to the index page (or logout functionality)
    window.location.href = "index.html";
});
