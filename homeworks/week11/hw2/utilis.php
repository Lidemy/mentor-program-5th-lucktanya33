<?php
  require_once("conn.php");

function getUserFromUsername($username){
  global $conn;
  $sql = sprintf(
    "select * from tanya_blog_users where username = '%s'",
    $username
  );
  $result = $conn->query($sql) or die($conn->error);// 加入 die($conn->error)可以把錯誤印出來
  $row = $result->fetch_assoc();
  return $row;
};

function escape($str) {
  return htmlspecialchars($str, ENT_QUOTES);
};
?>
