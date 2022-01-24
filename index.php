<?php
    
    // echo htmlspecialchars($_SERVER["PHP_SELF"]);

    // $nameErr = $emailErr = $messageErr = $name = $email = $message = $to = $subject = $body = "";
    include_once("home.html");

    require 'vendor/autoload.php';
    class SendEmail {
        public static function SendMail($from, $subject, $content) {
            $key = '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';

            $email = new \Sendgrid\Mail\Mail();
            $email->setFrom($from, 'Website');
            $email->setSubject($subject);
            $email->addto('dias.joshua7@yahoo.com');
            $email->addContent('text/plain', $content);

            $sendgrid = new \SendGrid($key);

            try {
                $response = $sendgrid->send($email);
                return $response;
            } catch(Exception $e) {
                echo 'Email exception caught : '. $e->getMessage() ."\n";
                return false;
            }
        }
    }

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $subject = 'New Form Submission';

        if ($name && $email && $message) {
            SendEmail::SendMail($email, $subject, $message);
        }
    }
    

    // function test_input($data) {
    //     $data = trim($data);
    //     $data = stripslashes($data);
    //     $data = htmlspecialchars($data);
    //     return $data;
    // };

    // if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //     echo "hello";
    //     mail($to, $subject, $body);
    //     if (empty($_POST["name"])) {
    //         $nameErr = "Name is required";
    //     } else {
    //         $name = test_input($_POST["name"]);
    //         if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
    //             $nameErr = "Only letters and white space allowed";
    //         };
    //     };
        
    //     if (empty($_POST["email"])) {
    //         $emailErr = "Email is required";
    //     } else {
    //         $email = test_input($_POST["email"]);
    //         if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    //             $emailErr = "Invalid email format";
    //         };
    //     };
        
    //     if (empty($_POST["message"])) {
    //         $messageErr = "Message is required";
    //     } else {
    //         $message = test_input($_POST["message"]);
    //     };
    //     $to = 'dias.joshua7@yahoo.com';
    //     $subject = 'New Form Submission';
    //     $body = "From: $name\n E-Mail: $email\n Message:\n $message";
    //     mail($to, $subject, $body);
    // };
    
    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $message = $_POST['message'];
    // $to = 'dias.joshua7@yahoo.com'; 
    // $subject = 'New Form Submission';

    // $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    // if ($_POST['submit']) {
    //     echo $name;
    //     echo $email;
    //     echo $message;
    //     echo $to;
    //     echo $subject;
    //     if ($name && $email && $message) { 
    //         mail($to, $subject, $body);
    //         echo '<p>Your message has been sent!</p>';
    //     } else { 
    //         echo '<p>Something went wrong, go back and try again!</p>'; 
    //     };
    // };
?>