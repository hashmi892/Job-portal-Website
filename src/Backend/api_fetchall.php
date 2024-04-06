<?php
include "connection.php";

// Set CORS headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Fetch jobs from database
$sql = "SELECT * FROM jobs";
$result = mysqli_query($conn, $sql);

// Check if query executed successfully
if (!$result) {
    die("SQL query failed: " . mysqli_error($conn));
}

// Display fetched jobs
if (mysqli_num_rows($result) > 0) {
    $output = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $output[] = $row;
    }
    echo json_encode($output);
} else {
    echo json_encode(array("message" => "0 results found"));
}

// Close connection
mysqli_close($conn);
