<?php
  session_start();
  require_once('conn.php');
  require_once('utilis.php');

  if (
    empty($_POST['nickname']) ||
    empty($_POST['username'])  ||
    empty($_POST['password']) 
  ) {
    header('Location: register.php?errCode=1');//如果上面是空的回到register.php並且帶上後面錯誤訊息參數
    die('資料不齊全');
  }
  //畫面拿POST資料
  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);//使用PHP內建HASH函式加密

  //SQL新增註冊資料
  $sql = "insert into tanya_board_users(nickname, username, password) values(?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sss", $nickname, $username, $password);
  $result = $stmt->execute();
  if (!$result) {
    if (strpos($conn->error, "Duplicate entry") !== false) {//對重複帳號會出現的訊息做字串比對
      header('Location: register.php?errCode=2');//如果為真就帶errCode 2
    }
    die($conn->error);
  }

  //拿role權限資料
  $user = getUserFromUsername($username);//傳入username
  $role = $user['role'];//拿到該username的['role']欄位

  //註冊完變成登入狀態
  $_SESSION['username'] = $username;//帶session到首頁可以變登入狀態
  $_SESSION['role'] = $role;//帶session到首頁可以變登入狀態
  header("Location: index.php");
?>