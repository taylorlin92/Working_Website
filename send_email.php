<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $surname = isset($_POST['surname']) ? htmlspecialchars($_POST['surname']) : '';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
    $subject = isset($_POST['subject']) ? htmlspecialchars($_POST['subject']) : '';
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

    // Recipient email address
    $to = "TAYLOR@YOKOTEX.COM";  // Replace with your actual email address

    // Email subject
    $email_subject = "New Message from: $name $surname";

    // Construct the email content
    $email_body = "
    <html>
    <head>
        <title>$email_subject</title>
    </head>
    <body>
        <p><strong>Name:</strong> $name $surname</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong></p>
        <p>$message</p>
    </body>
    </html>
    ";

    // Set content-type header for HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was an error sending the message. Please try again.";
    }
}
?>
