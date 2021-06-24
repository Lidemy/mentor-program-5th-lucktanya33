<?php
session_start();
require_once('conn.php');

//POST拿id資料 從input的name跟value拿到
$id = $_POST['id'];
echo '拿post資料的id是'. $id .'<br>';

//POST拿title, content資料
$title = $_POST['title'];
$content = $_POST['content'];

if (empty($title) || empty($content) ) {
  header('Location: edit_article.php?errCode=1&id='.$id);//回到編輯留言那一頁時可以帶errCode跟id
  die('資料不齊全');
}

//下SQL
$stmt = $conn->prepare(" UPDATE tanya_blog_articles SET title=?, content=? WHERE ID=? ");
$stmt->bind_param("ssi", $title, $content, $id);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
};
//$result = $stmt->get_result();??問題??如果不用印出結果只要改變資料庫資料這邊好像可不用寫

header('Location: index.php ');
?>
