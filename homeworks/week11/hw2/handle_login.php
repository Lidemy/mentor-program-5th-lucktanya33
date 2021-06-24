<?php
  session_start();//跟PHP說要開始用session
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

  /*$sql = sprintf(
    "select * from tanya_blog_users where username='%s' and password='%s'",
    $username,
    $password
  );*/
  // Authorization Bypass test  Password: anything 'or'1'='1 
  $stmt = $conn->prepare(
    "select * from tanya_blog_users where username=? and password=? ");
  $stmt->bind_param("ss", $username, $password);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  $result = $stmt->get_result();
  
  
  //判斷是否登入成功
  if ($result->num_rows) {
    // 登入成功
    header("Location: index.php");
    $_SESSION['username'] = $username;
  } else {
    header("Location: login.php?errCode=2");
  }
?>