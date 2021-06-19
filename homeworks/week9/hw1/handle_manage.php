<?php
  session_start();
  require_once('conn.php');
  require_once('utilis.php');

  echo '把id：' . $_POST['id'] . '<br>';
  echo '權限改成' . $_POST['role'];
  //exit();

  if (
    empty($_POST['id']) ||
    empty($_POST['role'])
  ) {
    //header('Location: manage.php?errCode=1&id='.$_POST['id']);//回到編輯留言那一頁時可以帶errCode跟id
    die('資料不齊全');
  }

  $username = $_SESSION['username'];
  $id = $_POST['id'];//id是從input的 name value兩個屬性拿的
  $role = $_POST['role'];

  $sql = "update tanya_board_users set role=? where id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ii', $role, $id);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  header("Location: index.php");
?>