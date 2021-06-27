<?php
  session_start();
  require_once('conn.php');
  require_once('utilis.php');

  //空值判斷，若為空回首頁，hint資料不齊
  if (
    empty($_POST['nickname'])
  ) {
    header('Location: index.php?errCode=1');
    die('資料不齊全');
  }

  //nickname和username變數資料
  $username = $_SESSION['username'];
  $nickname = $_POST['nickname'];

  $sql = "update tanya_board_users set nickname=? where username=?";//在users這張資料表把username叫做？的資料的nickname改成？
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss', $nickname, $username);
  $result = $stmt->execute();

  if (!$result) {
    die($conn->error);
  }
  
  header("Location: index.php");
?>