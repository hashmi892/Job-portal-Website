<?php
include "connection.php";

// Any third party want to access our API, it will get to know that our API returns the data in JSON format
header('Content-Type: application/json');
// who can access our API
header('Access-Control-Allow-Origin: *');

// Read JSON data from the request
$data = json_decode(file_get_contents("php://input"), true);

// Check if 'Eid' or 'jobtitle' or 'Esalary' and location is present in the JSON data
// Endpoint to get data based on the single filters 
// Note these endpoints will work individually 
// Endpoint to get data based on id
if (isset($data['Eid'])) {
    $Emp_id = mysqli_real_escape_string($conn, $data['Eid']);
    $sql = "SELECT * FROM jobs WHERE id = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "i", $Emp_id);
}
// Endpoint to get data based on jobtitle
elseif (isset($data['jobtitle'])) {
    $Emp_title = mysqli_real_escape_string($conn, $data['jobtitle']);
    $sql = "SELECT * FROM jobs WHERE title = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $Emp_title);
}
// Endpoint to get data based on job salary
elseif (isset($data['Esalary'])) {
    $Emp_salary = mysqli_real_escape_string($conn, $data['Esalary']);
    $sql = "SELECT * FROM jobs WHERE salary = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "i", $Emp_salary);
}
// Endpoint to get data based on joblocation
elseif (isset($data['joblocation'])) {
    $Emp_location = mysqli_real_escape_string($conn, $data['joblocation']);
    $sql = "SELECT * FROM jobs WHERE city = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $Emp_location);
} else {
    echo json_encode(array("error" => "'Eid' or 'jobtitle' or 'Esalary' parameter missing in the request"));
    exit;
}

// Execute the prepared statement
mysqli_stmt_execute($stmt);

// Get results
$result = mysqli_stmt_get_result($stmt);

// Check if query executed successfully
if (!$result) {
    echo json_encode(array("error" => "SQL query failed: " . mysqli_error($conn)));
    exit;
}

// Fetch jobs from database
if (mysqli_num_rows($result) > 0) {
    $output = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $output[] = $row;
    }
    echo json_encode($output);
} else {
    echo json_encode(array("message" => "0 results found"));
}

// Close statement and connection
mysqli_stmt_close($stmt);
mysqli_close($conn);
