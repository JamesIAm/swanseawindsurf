<?php

include('connectionfile.php');

$name = $_POST['name'];
$email = $_POST['email'];
$location = $_POST['location'];

$sql = "INSERT INTO session (name, email, location) VALUES ('$name', '$email', '$location')";

if (mysqli_query($dbc, $sql)) {
    echo "New record created successfully";
} else {
    echo $name. "\n";
    echo $email. "\n";
    echo $location. "\n";
    echo "Error: " . $sql . "<br>" . mysqli_error($dbc);
}

?>

<meta http-equiv="refresh" content="0;session_sign_up_complete.html" />