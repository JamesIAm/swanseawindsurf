<?php

include('connectionfile.php');

$name = cleanData($_POST['name']);
$email = cleanData($_POST['email']);
$location = cleanData($_POST['location']);
$sessionId = cleanData($_POST['session_id']);

try {
    $query = "INSERT INTO Attendees (name, email, session_id, location) VALUES (?,?,?,?)";
    $preparedQuery = $dbc->prepare($query);
    $preparedQuery->bind_param("ssis", $name, $email, $sessionId, $location);//s for string, i for int, f for float etc.
    $preparedQuery->execute(); 
    echo ("New record created successfully");
} catch (Exception $e) {
    echo $name. "\n";
    echo $email. "\n";
    echo $location. "\n";
    echo "Error: " . $sql . "<br>" . $e;
}
function cleanData ($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>

<meta http-equiv="refresh" content="0;../session_sign_up_complete.html" />