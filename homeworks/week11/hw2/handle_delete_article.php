<?php
session_start();
require_once('conn.php');
require_once('check_access.php');

$id = $_GET['id'];
echo '拿get資料的id是'. $id .'<br>';

if (empty($id)) {
  header('Location:index.php');
  die('刪除失敗！');
}

//下SQL
$stmt = $conn->prepare(" UPDATE tanya_blog_articles SET is_deleted ='1' WHERE ID=? ");
$stmt->bind_param("i", $id);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
};
//$result = $stmt->get_result();??問題??如果不用印出結果只要改變資料庫資料這邊好像可不用寫

header('Location: index.php ');
?>
