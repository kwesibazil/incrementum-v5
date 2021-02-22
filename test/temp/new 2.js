<?php

class Login {

  public $conn;

  public function __construct($conn) {
      require_once '../utils/Queries.php';
      $this->conn = $conn;
      var_dump($conn);
  }


  public function userLogin ($data){
    //echo $data;
    //echo '<br>we are in userLogin<br>';

    $conn2 = mysqli_connect('localhost', 'kwesi', 'password', 'incremutum-v5');
   var_dump($conn2);
    // $sql = mysqli_query($conn2, "SELECT * FROM users");
    // $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

    
    // $stmt = $this->conn->prepare($sql);
    // $stmt->bind_param("s", $data);
    // $stmt->execute();
    // $result = $stmt->get_result();
    // $result = $result->fetch_assoc();
    $data = 1;

    $stmt = $conn2->prepare("SELECT * FROM users WHERE id=?");
    $stmt->bind_param("i", $data);
    $stmt->execute();
    $result = $stmt->get_result();
    $result = $result->fetch_assoc();

    var_dump($result);
   // foreach ($result as $user)
     // echo $user['email'];
    //   //if (($_POST['email'] == $user['email']) && ($_POST['password'] == $user['password']))
    }

}//CLASS ENDS HERE


//$sql = 'SELECT * FROM users WHERE email=?'

// $sql = mysqli_query($this->conn, $sql);
// $users = mysqli_fetch_all($sql, MYSQLI_ASSOC);


// $resultcheck = mysqli_query($conn, $querycheck);
// $row = mysqli_fetch_array($resultcheck, MYSQLI_ASSOC);


// $sql = "SELECT * FROM users WHERE id=?";
// $stmt = $conn->prepare($sql); 
// $stmt->bind_param("i", $id);
// $stmt->execute();
// $result = $stmt->get_result();
// while ($row = $result->fetch_assoc()) {
//     echo $row['name'];
// }2

// $conn = mysqli_connect('localhost', 'kwesi$', 'password', 'incrementum');

// $sql = mysqli_query($conn, "SELECT * FROM users");
// $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

