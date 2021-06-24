<?php
//資料放進PHP陣列
$comments = array();
array_push($comments, array(
  "id"=> 1,
  "username"=> "aaa",
  "content"=> "123"
));
array_push($comments, array(
  "id"=> 2,
  "username"=> "bbb",
  "content"=> "456"
));

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

