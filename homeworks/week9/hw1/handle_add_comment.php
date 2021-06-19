<?php
  session_start();
  require_once('conn.php');
  require_once('utilis.php');

//權限判斷：未登入
  if (!$_SESSION['username']) {
    header("Location: index.php?errCode=3");
    exit();
  }

  //權限判斷：被停權，跳回主頁hint停權不能新增
  if ($_SESSION['role'] == '2') {
    header("Location: index.php?errCode=2");
    exit();
  }

  //空值判斷，若為空回首頁，hint資料不齊
  if (
    empty($_POST['content'])
  ) {
    header('Location: index.php?errCode=1');
    die('資料不齊全');
  }

  //nickname和content變數資料
  /*$user = getUserFromUsername($_SESSION['username']);
  $nickname = $user['nickname'];*/
  $content = $_POST['content'];
  $username = $_SESSION['username'];

  $sql = "insert into tanya_board_comments(username, content) values(?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss', $username, $content);
  $result = $stmt->execute();

  if (!$result) {
    die($conn->error);
  }
  
  header("Location: index.php");
?>