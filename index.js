// JavaScript for the index page
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform login authentication here
    // Example: Send username and password to server for validation
    // Example: Assume there are arrays of usernames and passwords for users and admin

    const users = [
        { username: 'user1', password: '123' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' },
        { username: 'user4', password: 'password4' },
        { username: 'user5', password: 'password5' },
        { username: 'user6', password: 'password6' }
    ];

    const admin = { username: 'admin', password: '123' };

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        // Redirect to user page if user login is successful
        window.location.href = "user.html";
    } else if (admin.username === username && admin.password === password) {
        // Redirect to admin page if admin login is successful
        window.location.href = "admin.html";
    } else {
        alert('Invalid username or password');
    }
    

// Retrieve emergency message from local storage
const emergencyLoginMessage = localStorage.getItem('emergencyLoginMessage');

// Display emergency message as notification below login menu if available
if (emergencyLoginMessage) {
    const emergencyMessageElement = document.getElementById('emergencyMessage');
    emergencyMessageElement.textContent = emergencyLoginMessage;
    document.getElementById('emergencyMessageNotification').classList.remove('hidden');
}

});
