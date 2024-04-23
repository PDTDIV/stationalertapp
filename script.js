const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
    { username: 'user4', password: 'password4' },
    { username: 'user5', password: 'password5' },
    { username: 'user6', password: 'password6' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Show alert page and hide login page
        document.getElementById('loginForm').reset();
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('alertPage').classList.remove('hidden');
        document.getElementById('loggedInUser').textContent = user.username;

        // Add click event listeners to alert images
        document.querySelectorAll('.alert-image').forEach(image => {
            image.addEventListener('click', function() {
                const alertType = this.getAttribute('data-type');
                sendAlert(user.username, alertType);
            });
        });
    } else {
        alert('Invalid username or password');
    }
});

function sendAlert(username, alertType) {
    // In a real application, you would send the alert to the admin page
    // For demonstration purposes, we'll log the alert to the console
    console.log(`Alert from ${username}: ${alertType}`);
}