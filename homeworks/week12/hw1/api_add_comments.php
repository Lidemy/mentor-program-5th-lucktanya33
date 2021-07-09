<?php
require_once('conn.php');
header('Content-type:application/json;charset=utf-8');//讓瀏覽器知道格式:json/編碼:utf-8
header('Access-Control-Allow-Origin: *');

//空值判斷
if (
  empty($_POST['content']) ||
  empty($_POST['username']) 
) {
  $json = array(
    "ok" => false,
    "message" => "請輸入未填寫的資料！"
  );
  $response = json_encode($json);
  echo $response;
  die();
}

//拿資料
$content = $_POST['content'];
$username = $_POST['username'];

// 下SQL
$sql = "insert into tanya_board_comments(username, content) values(?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ss', $username, $content);
$result = $stmt->execute();
if (!$result) { //SQL錯誤處理
  /*die($conn->error);
  print_r($conn->error);*///可把連接的錯誤印出來
  $json = array(
    "ok" => false,
    "message" => $conn->error
  );
  $response = json_encode($json);
  echo $response;
  die();
};

//成功的話
$json = array(
  "ok" => true,
  "message" => "success"
);
$response = json_encode($json);
echo $response;
die();

