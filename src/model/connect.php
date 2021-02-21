<?php
  
class Connect {
  
    public function __construct(){
      require_once '../../config/constants.php';
    }

    public function init() {
      $conn = mysqli_connect(HOST, USERNAME, PASSWORD, DATABASE);
      if(!$conn)
        die('Database Connection failed: '. mysqli_connect_errno());

      return $conn;
    }
}//CLASS ENDS HERE

