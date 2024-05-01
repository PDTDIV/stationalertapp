<?php
// Include your database connection file here
include 'db_connection.php';

// Function to insert a new message into the database
function insertMessage($sender, $content) {
    global $conn; // Assuming $conn is your database connection object

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO messages (sender, content) VALUES (?, ?)");
    $stmt->bind_param("ss", $sender, $content);

    // Execute the statement
    if ($stmt->execute()) {
        // Message inserted successfully
        return true;
    } else {
        // Error inserting message
        return false;
    }
}

// Usage example (you can call this function with form data)
$sender = $_POST['sender']; // Assuming sender is obtained from form data
$content = $_POST['content']; // Assuming content is obtained from form data
if (insertMessage($sender, $content)) {
    echo "Message inserted successfully.";
} else {
    echo "Error inserting message.";
}
?>
