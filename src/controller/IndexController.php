<?php

require_once '../model/connect.php';
require_once 'LoginController.php';
session_start();


$conn = new Connect();
$user = new LoginController($conn->init());
$result = $user->login('test@gmail.com');
exit(json_encode($result)); 



