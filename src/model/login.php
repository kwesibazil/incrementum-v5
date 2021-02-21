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

  public function createUser ($email, $password, $privilege){
    $sql = 'INSERT INTO users ( email, password, admin) VALUES (?,?,?)';
    $stmt = $this->conn->prepare($sql);
    $stmt->bind_param("ssi", $email, $password, $privilege);
    return $stmt->execute();
    

  }

  // INSERT INTO `users`(`id`, `email`, `password`, `admin`) VALUES ([value-1],[value-2],[value-3],[value-4])






}//CLASS ENDS HERE