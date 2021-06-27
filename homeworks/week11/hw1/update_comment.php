<?php
session_start();
require_once('conn.php');//引入和資料庫連結的檔案
require_once('utilis.php');
require_once('check_access.php');//權限判斷：是否登入

//拿GET資料(網址列上的留言編號) 
$id = $_GET['id'];

//跟資料庫拿資料
$stmt = $conn->prepare(
  'select * from tanya_board_comments where id = ?'
);
$stmt->bind_param("i", $id);
$result = $stmt->execute();
if (!$result) {
  die('Error is :' . $conn->error);
}
$result = $stmt->get_result();
$row = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言板-指揮中心</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="board">
      <h1 class="board__title">編輯留言</h1>
      <?php
        if (!empty($_GET['errCode'])) {
          $code = $_GET['errCode'];
          $msg = 'Error';
          if ($code === '1') {
            $msg = '資料不齊全';
          }
          echo '<h2 class="error">錯誤：' . $msg . '</h2>';
        }
      ?>
      <form class="board__new-comment-form" method="POST" action="handle_update_comment.php?id=">
        <textarea name="content" rows="5" ><?php echo escape($row['content']);?></textarea>
        <input type="hidden" name="id" value="<?php echo $row['id'] ?>" /><!--透過此帶id過去handle_update_comment.php-->
        <input class="board__submit-btn" type="submit"/>
      </form>
  </main>
</body>
</html> 