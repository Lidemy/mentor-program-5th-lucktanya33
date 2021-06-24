<?php
  /*用API新增留言*/ 
  require_once('conn.php');
  header('Content-type:application/json;charset=utf-8');//讓瀏覽器知道格式:json/編碼:utf-8

  //錯誤處理：POST空值
  if (
    empty($_POST['content'])
  ) {
    $json = array(
      "result" => false,
      "message" => "Please input something"
    );
    $json_response = json_encode($json);
    echo $json_response;
    die();
  }

  $content = $_POST['content'];
  $username = $_SESSION['username'];

  //下SQL
  $sql = "insert into tanya_board_comments(username, content) values(?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss', $username, $content);
  $result = $stmt->execute();

  //錯誤處理：連線資料庫
  if (!$result) {
    $json = array(
      "result" => false,
      "message" => $conn->error
    );
    $json_response = json_encode($json);
    echo $json_response;
    die();
  }

  //成功新增留言
  $json = array(
    "result" => true,
    "message" => "Success!"
  );

  $json_response = json_encode($json);
  echo $json_response;
?>