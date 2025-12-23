 <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name    = htmlspecialchars(trim($_POST["name"]));
    $email   = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    if (empty($name) || empty($email) || empty($message)) {
        echo "❌ All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "❌ Invalid email format.";
        exit;
    }

    $to = "tusarpanda@example.com"; // 🔴 replace with YOUR email
    $subject = "New Contact Form Message";
    
    $body = "
    Name: $name\n
    Email: $email\n
    Message:\n$message
    ";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "✅ Message sent successfully!";
    } else {
        echo "❌ Failed to send message. Try again later.";
    }
}
?> 
