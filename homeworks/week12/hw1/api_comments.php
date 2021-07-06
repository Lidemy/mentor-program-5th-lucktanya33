<?php
require_once('conn.php');//引入和資料庫連結的檔案
header('Content-type:application/json;charset=utf-8');//讓瀏覽器知道格式:json/編碼:utf-8
header('Access-Control-Allow-Origin: *');

//下SQL
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

$result = $stmt->execute();
if (!$result) {
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
$result = $stmt->get_result();

//資料放進PHP陣列
$comments = array();
while($row =$result->fetch_assoc()) {
  array_push($comments, array(
    "id"=> $row['id'],
    "username"=> $row['username'],
    "content"=> $row['content'],
    "created_at"=> $row['created_at']
  ));
}

//陣列變成json資料
//-1.陣列再放進"comments" 這個名稱裡面
$json = array( //把一個新的array存到$json裡面
  "ok" => true,
  "comments" => $comments //意思是：comments的內容就是這個$comment array
);
//-2.轉為json格式
$response = json_encode($json);
echo $response;
?>

