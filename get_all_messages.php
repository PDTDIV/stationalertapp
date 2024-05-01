<?php
// Include your database connection file here
include 'db_connection.php';

// Function to retrieve all messages from the database
function getAllMessages() {
    global $conn; // Assuming $conn is your database connection object

    // Prepare SQL statement
    $stmt = $conn->prepare("SELECT * FROM messages");

    // Execute the statement
    $stmt->execute();

    // Get result set
    $result = $stmt->get_result();

    // Fetch messages as an associative array
    $messages = $result->fetch_all(MYSQLI_ASSOC);

    return $messages;
}

// Usage example
$messages = getAllMessages();
print_r($messages); // Output all messages
?>
