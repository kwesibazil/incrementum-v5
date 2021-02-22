<?php

class Login {
  public $conn;

  public function __construct($conn) {
      require_once '../utils/Queries.php';
      $this->conn = $conn;
  }

  public function userLogin ($data){
    $sql = 'SELECT * FROM users WHERE email=? AND password=?';
    $stmt = $this->conn->prepare($sql);
    $stmt->bind_param("ss", $data->email, $data->password);
    $stmt->execute();
    $result = $stmt->get_result();
    return $result = $result->fetch_assoc();
  }

  public function createUser ($data, $privilege = 0){
    $sql = 'INSERT INTO users ( email, password, admin) VALUES (?,?,?)';
    $stmt = $this->conn->prepare($sql);
    $stmt->bind_param("ssi", $data->email, $data->password, $privilege);
    return $stmt->execute();
  }

  
}//CLASS ENDS HERE