<?php
    include_once("home.html");
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'dias.joshua7@yahoo.com'; 
    $subject = 'New Form Submission';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    // if ($_POST['submit']) {
    //     echo $name;
    //     echo $email;
    //     echo $message;
    //     echo $to;
    //     echo $subject;
    //     if (mail($to, $subject, $body)) {
    //         echo '<p>Your message has been sent!</p>';
    //     } else { 
    //         echo '<p>Something went wrong, go back and try again!</p>'; 
    //     };
    // };

    require 'includes/PHPMailer.php';
    require 'includes/SMTP.php';
    require 'includes/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;


?>