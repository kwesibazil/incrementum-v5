<?php
class LoginController {

  private $loginModel;

  public function __construct($conn){
    require_once '../model/login.php';
    $this->loginModel = new Login($conn);
  }

  public function login ($data){
    return $this->loginModel->userLogin($data);
  }

  public function create_user($email, $password, $privilege){
    return $this->loginModel->createUser($email, $password, $privilege);
  }
  

}//CLASS ENDS HERE


