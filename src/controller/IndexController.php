<?php

require_once '../model/connect.php';
require_once 'LoginController.php';
session_start();

//receive data sent using fetch POST
$data=json_decode(file_get_contents("php://input"));

$conn = new Connect();
$user = new LoginController($conn->init());
$result = $user->create_user($data->email, $data->password, 0);    //0 = FALSE, 1 = TRUE
exit(json_encode($result));


// $conn = new Connect();
// $user = new LoginController($conn->init());
// $result = $user->login('test@gmail.com');
//exit(json_encode($result)); 



// echo json_encode($test);

// echo gettype($test);