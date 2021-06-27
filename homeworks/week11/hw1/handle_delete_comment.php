<?php
  session_start();
  require_once('conn.php');
  require_once('utilis.php');

  if (!($_SESSION['username'])) {
    header("Location: index.php");
  }

  $id = $_GET['id'];

  if (
    empty($_GET['id'])
  ) {
    //header('Location: index.php?errCode=1');
    die('留言刪除失敗');
  }

  //下SQL指令
  $sql = "update tanya_board_comments set is_deleted=0 where id=?";//刪除方法:soft delete
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('i', $id);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
?>