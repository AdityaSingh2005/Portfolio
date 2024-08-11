<?php
// Set your email address here
$to = 'adityasinghwork11@gmail.com';

if($_POST) {
   $name = trim(stripslashes($_POST['name']));
   $email = trim(stripslashes($_POST['email']));
   $message = trim(stripslashes($_POST['message']));

   $subject = "New Contact Form Submission";

   // Set Message
   $email_content = "You have received a new message from your website contact form.\n\n";
   $email_content .= "Name: $name\n";
   $email_content .= "Email: $email\n\n";
   $email_content .= "Message:\n$message\n";

   // Email Headers
   $headers = "From: $name <$email>";

   // Send the email
   if (mail($to, $subject, $email_content, $headers)) {
       echo "OK";
   } else {
       echo "Something went wrong. Please try again.";
   }
} else {
    echo "Direct access to this script is not allowed.";
}
?>