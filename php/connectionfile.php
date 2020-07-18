<?php
//Opens connection to mySQL server

//define connection paramaters
$host = 'swanseawindsurf.co.uk.mysql';
$username = 'swanseawindsurf_co_uk';
$password = 'W!ndsurf1995';
$database = 'swanseawindsurf_co_uk';

//connection function

$dbc = mysqli_connect($host, $username, $password, $database);
$dbc -> set_charset("utf8mb4");
?>