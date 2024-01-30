<?php

session_start();

// Check if the form is submitted
 
    // Check if the username and password are provided
    if (isset($_POST['submit']) ){

        $email = $_POST['email'];
        $password = $_POST['password'];// Replace these values with your own database credentials
        
        
        $Host = 'localhost';
        $User = 'root';
        $Password = '';
        $dbName = 'ipproject';

        // Create a database connection
        $conn = mysqli_connect($Host, $User, $Password, $dbName);

      $sql = "INSERT INTO customer(email,password) values ('$email','$password')";
      mysqli_query($conn,$sqli);


    }


?>