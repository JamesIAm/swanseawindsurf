<?php
    include('connectionfile.php');
    $bookable_sessions_query = "SELECT * FROM `sessions` WHERE bookable_status != 0";
    $bookable_sessions = $dbc->query($bookable_sessions_query);
    if ($bookable_sessions > 0) {
        $sessions_to_return = [];
        foreach ($bookable_sessions as $row){
            $place_check = "SELECT * FROM Attendees WHERE session_id = ".$row["session_id"];
            $attendees = mysqli_query($dbc, $place_check);
            $places_booked = mysqli_num_rows($attendees);

            if ($places_booked<$row["place_limit"]) {
                $session_details = array($row["session_id"], $row["name"], $row["session_date"], $row["session_time"]);
                array_push($sessions_to_return,$session_details);
            } else {
                $no_longer_bookable = "UPDATE `sessions` SET `bookable_status` = '0' WHERE `sessions`.`session_id` = ".$row["session_id"];
                mysqli_query($dbc, $no_longer_bookable);
            }
        }
        echo json_encode($sessions_to_return);
    } else {
        echo json_encode("No sessions available");
    }
    $dbc = null;
?>