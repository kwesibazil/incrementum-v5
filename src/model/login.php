<?php

class Login {
  public $conn;

  public function __construct($conn) {
      require_once '../utils/Queries.php';
      $this->conn = $conn;
  }

  public function userLogin ($data){
    $sql = 'SELECT * FROM users WHERE email=?';
    $stmt = $this->conn->prepare($sql);
    $stmt->bind_param("s", $data);
    $stmt->execute();
    $result = $stmt->get_result();
    return $result = $result->fetch_assoc();
  }







}//CLASS ENDS HERE