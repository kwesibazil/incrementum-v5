<?php

require_once '../model/connect.php';
require_once 'LoginController.php';
session_start();

//receive data sent using fetch POST
$data=json_decode(file_get_contents("php://input"));

$conn = new Connect();
$loginController = new LoginController($conn->init());



//authenticate user login
//$result = $loginController->login($data);
//exit(json_encode($result));


//create new user
//$result = $loginController->create($data);    //0 = FALSE, 1 = TRUE
//exit(json_encode($result));

