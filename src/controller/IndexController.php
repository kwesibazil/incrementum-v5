<?php

require_once '../model/connect.php';
require_once 'LoginController.php';
session_start();

//receive data sent using fetch POST
$data=json_decode(file_get_contents("php://input"));

$conn = new Connect();


//make shift router
if (preg_match( "/^\/login/i", $data->route)){
    $loginController = new LoginController($conn->init());
    
    if(preg_match('/create$/i', $data->route)){
      //echo 'in login create';
      $response = $loginController->create($data);
    } 
    else{
    //echo 'in login login';
     $response = $loginController->login($data);
    }
}

exit(json_encode($response));






//$loginController = new LoginController($conn->init());



//authenticate user login
//$result = $loginController->login($data);
//exit(json_encode($result));


//create new user
//$result = $loginController->create($data);    //0 = FALSE, 1 = TRUE
//exit(json_encode($result));

