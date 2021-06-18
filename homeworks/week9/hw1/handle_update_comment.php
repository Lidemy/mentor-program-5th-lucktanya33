<?php
  session_start();
  require_once('conn.php');
  require_once('utilis.php');

  //錯誤處理：沒拿到資料
  if (
    empty($_POST['content'])
  ) {
    header('Location: update_comment.php?errCode=1&id='.$_POST['id']);//回到編輯留言那一頁時可以帶errCode跟id
    die('資料不齊全');
  }

  //需要的資料
  $id = $_POST['id'];//id是從input的 name value兩個屬性拿的
  $content = $_POST['content'];//這一頁輸入的

  //下SQL指令
  $sql = "update tanya_board_comments set content=? where id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('si', $content, $id);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  header("Location: index.php");
?>