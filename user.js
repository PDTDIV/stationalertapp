// JavaScript for the user page

// Function to send message to admin
function sendMessageToAdmin(messageType, userDetails) {
    // Get current date and time
    const dateTime = new Date().toLocaleString();
    // Construct the message with date, time, message type, and user details
    const message = { content: messageType, timestamp: dateTime, userDetails: userDetails };
    // Retrieve existing messages from local storage or initialize an empty array
    const existingMessages = JSON.parse(localStorage.getItem('userMessages')) || [];
    // Add the new message to the array
    existingMessages.push(message);
    // Store the updated array back to local storage
    localStorage.setItem('userMessages', JSON.stringify(existingMessages));
}

// Function to handle button click events
document.querySelectorAll('.alert-button').forEach(button => {
    button.addEventListener('click', function() {
        const messageType = this.getAttribute('data-type');
        // Prompt the user to enter their details
        const userDetails = prompt('Enter your details (name, contact, etc.):');
        if (userDetails) {
            // Send message to admin
            sendMessageToAdmin(messageType, userDetails);
            // Optionally, display a confirmation to the user
            alert(`Message sent to admin: ${messageType}`);
        } else {
            alert('Please enter your details to send the message.');
        }
    });
});

// JavaScript for the logout button
document.getElementById('logoutButton').addEventListener('click', function() {
    // Redirect to the index page (or logout functionality)
    window.location.href = "index.html";
});
