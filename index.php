<?php
    include_once("home.html");
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'dias.joshua7@yahoo.com'; 
    $subject = 'New Form Submission';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
        echo $name;
        echo $email;
        echo $message;
        echo $to;
        echo $subject;
        if (mail($to, $subject, $body)) {
            echo '<p>Your message has been sent!</p>';
        } else { 
            echo '<p>Something went wrong, go back and try again!</p>'; 
        };
    };

    // require 'includes/PHPMailer.php';
    // require 'includes/SMTP.php';
    // require 'includes/Exception.php';

    // use PHPMailer\PHPMailer\PHPMailer;
    // use PHPMailer\PHPMailer\SMTP;
    // use PHPMailer\PHPMailer\Exception;

    // $mail = new PHPMailer();

    // $mail->isSMTP();
    // $mail->Host = "smtp.gmail.com";
    // $mail->SMTPAuth = "true";
    // $mail->SMTPSecure = "tls";
    // $mail->Port = "587";
    // $mail->username = "dias.joshua7@gmail.com";
    // $mail->password = "December141995";
    // $mail->Subject = "test";
    // $mail->setFrom("dias.joshua7@yahoo.com");
    // $mail->Body = "Hello";
    // $mail->addAddress("dias.joshua7@gmail.com");
    // echo $mail;
    // if ($mail->Send()) {
    //     echo "Email Sent";
    // } else {
    //     echo "Error";
    // }
    // $mail->smtpClose();
?>