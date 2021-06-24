<?php
  session_start();
  require_once('conn.php');
  require_once('utilis.php');

  //空值判斷，若為空回首頁，hint資料不齊
  if (
    empty($_POST['title']) || 
    empty($_POST['content'])
  ) {
    header('Location: index.php?errCode=1');
    die('資料不齊全');
  }
  //測試是否拿到POST資料
  /*echo $_POST['title'] . $_POST['content'];
  exit();*/

  $title = $_POST['title'];
  $content = $_POST['content'];

  $sql = "insert into tanya_blog_articles(title, content) values(?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss', $title, $content);
  $result = $stmt->execute();

  if (!$result) {
    die($conn->error);
  }
  
  header("Location: index.php");
?>