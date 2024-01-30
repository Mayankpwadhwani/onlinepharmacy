<?php


if (isset($_POST['submit']) ){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $city = $_POST['city'];

    
    
    $Host = 'localhost';
    $User = 'root';
    $Password = '';
    $dbName = 'ipproject';

    // Create a database connection
    $conn = mysqli_connect($Host, $User, $Password, $dbName);

  $sql = "INSERT INTO (email,password) values ('$email','$password')";
  mysqli_query($conn,$sqli);


}

?>












<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>signup</title>
</head>
<body>
    <form action="#"  method="POST">
    Name: <input type="text" name="name"><br>
    Email: <input type="email" name="email"><br>
    Mobile: <input type="number" name="mobile"><br>
    City: <input type="text" name="city"><br>

    <input type="text" value ="send data">





</form>
</body>
</html>