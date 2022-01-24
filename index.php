<?php
    
    // echo htmlspecialchars($_SERVER["PHP_SELF"]);

    // $nameErr = $emailErr = $messageErr = $name = $email = $message = $to = $subject = $body = "";
    include_once("home.html");

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
        if ($name && $email && $message) { 
            mail($to, $subject, $body);
            echo '<p>Your message has been sent!</p>';
        } else { 
            echo '<p>Something went wrong, go back and try again!</p>'; 
        };
    };
?>