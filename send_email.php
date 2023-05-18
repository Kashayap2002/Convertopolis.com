<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "kashayap2002@gmail.com";
  $subject = "Feedback Form Submission";
  $body = "Name: $name\nEmail: $email\n\n$message";

 
  if (mail($to, $subject, $body)) {
    echo "Email sent successfully!";
  } else {
    echo "Failed to send the email.";
  }
}
?>
