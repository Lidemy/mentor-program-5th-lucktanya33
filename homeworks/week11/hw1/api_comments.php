<?php
require_once('conn.php');//引入和資料庫連結的檔案

//跟資料庫拿資料
$stmt = $conn->prepare(
  'select '.
    'C.id as id, C.content as content, '.
    'C.created_at as created_at, U.nickname as nickname, U.username as username '.
  'from tanya_board_comments as C ' .
  'left join tanya_board_users as U on C.username = U.username '.
  'where C.is_deleted = 1 '. //只會顯示is_deleted這一欄值NULL的留言
  'order by C.id desc'
);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
  print_r($conn->error);//可把連接的錯誤印出來
};
$result = $stmt->get_result();


//資料放進PHP陣列
$comments = array();
while($row =$result->fetch_assoc()) {
  array_push($comments, array(
    "id"=> $row['id'],
    "username"=> $row['username'],
    "nickname"=> $row['nickname'],
    "content"=> $row['content'],
    "created_at"=> $row['created_at']
  ));
}

//陣列變成json資料
//-1.陣列再放進"comments" 這個名稱裡面
$json = array( //把一個新的array存到$json裡面
  "comments" => $comments //意思是：comments的內容就是這個$comment array
);
//-2.轉為json格式
$json_response = json_encode($json);
header('Content-type:application/json;charset=utf-8');//讓瀏覽器知道格式:json/編碼:utf-8
echo $json_response;

?>

