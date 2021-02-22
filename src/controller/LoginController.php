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

  public function create($data){
    return $this->loginModel->createUser($data);
  }
  

}//CLASS ENDS HERE


