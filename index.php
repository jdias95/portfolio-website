<?php
    include_once("home.html");
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'dias.joshua7@yahoo.com'; 
    $subject = 'New Form Submission';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
        if (strpos($message, 'robot') !== false || strpos($message, 'money') !== false || strpos($message, 'rich') !== false) {
            echo '';
        } else {
            if (mail($to, $subject, $body)) {
                echo '<p>Your message has been sent!</p>';
            } else { 
                echo '<p>Something went wrong, go back and try again!</p>'; 
            };
        };
    };
?>