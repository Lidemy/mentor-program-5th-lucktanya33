<?php
  session_start();
  require_once('conn.php');
  require_once('utilis.php');

  if (
    empty($_POST['username'])  ||
    empty($_POST['password']) 
  ) {
    header('Location: login.php?errCode=1');
    die('資料不齊全');
  }

  $username = $_POST['username'];
  $password = $_POST['password'];
  
  //拿role權限資料
  $user = getUserFromUsername($username);//傳入username
  $role = $user['role'];//拿到該username的['role']欄位

  $sql = sprintf(
    "select * from tanya_board_users where username='%s'",
    $username
  );
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }
  
  // 有查到使用者
  $row = $result->fetch_assoc();
  if (password_verify($password, $row['password'])) {
    // 登入成功
    $_SESSION['username'] = $username;
    $_SESSION['role'] = $role;
    header("Location: index.php");
  } else {
    header("Location: login.php?errCode=2");
  }
?>