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

// 下SQL 存入留言
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

//下SQL2 拿資料
if(empty($_GET['before'])) { //before沒有值: 吐出預設資料
  $sql =
  'select '.
  'C.id as id, C.content as content, '.
  'C.created_at as created_at, C.username as username '.
  'from tanya_board_comments as C ' .
  'where C.is_deleted = 1 '. 
  'order by C.id desc LIMIT 5';
  $stmt = $conn->prepare($sql);
} else { //before有值: 吐出該值以前的資料
  $sql =
  'select '.
  'C.id as id, C.content as content, '.
  'C.created_at as created_at, C.username as username '.
  'from tanya_board_comments as C ' .
  'where C.is_deleted = 1 '. 
  "and id < ? ".
  'order by C.id desc LIMIT 5';
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('i', $_GET['before']);
}

$result2 = $stmt->execute();
if (!$result) {
  $json = array(
    "ok" => false,
    "message" => $conn->error
  );
  $response = json_encode($json);
  echo $response;
  die();
};
$result2 = $stmt->get_result();

//資料放進PHP陣列
$comments = array();
while($row =$result2->fetch_assoc()) {
  array_push($comments, array(
    "id"=> $row['id'],
    "username"=> $row['username'],
    "content"=> $row['content'],
    "created_at"=> $row['created_at']
  ));
}

//成功的話
$json = array(
  "ok" => true,
  "message" => "success",
  "comments" => $comments
);
$response = json_encode($json);
echo $response;
die();
