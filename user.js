// user.js

// Function to handle form submission for sending messages
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const sender = document.getElementById('sender').value;
    const content = document.getElementById('content').value;

    // Send form data to the PHP script
    fetch('insert_message.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sender: sender, content: content }),
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Log response from the PHP script
        // Handle response as needed (e.g., show success/error message)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Attach event listener to the form submit event
document.getElementById('loginForm').addEventListener('submit', handleSubmit);
