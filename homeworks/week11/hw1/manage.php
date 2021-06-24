<?php
session_start();
require_once('conn.php');
require_once('utilis.php');

 //權限判斷：是否為管理員
 if (!($_SESSION['role'] == '5')) {
  header("Location: index.php");
}

$result = $conn->query("select * from tanya_board_users;");
if (!$result) {
  die($conn->error);//print_r($conn->error)可把連接的錯誤印出來
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言板-後台</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="board">
      <a href="index.php">回首頁</a> 
      <h1 class="board__title">這裡是管理員後台</h1>
      <?php //錯誤訊息處理
        if (!empty($_GET['errCode'])) {//從處理功能的php拿過來的資訊
          $getCode = $_GET['errCode'];
          $errorMsg = '有錯誤';
          if ($getCode === '1') {
            $errorMsg = '資料不齊全';
          } elseif ($getCode === '2') {
            $errorMsg = '停權不能新增';
          };
          echo '<h2 class ="error">錯誤：' . $errorMsg . '<h2>';
        }
      ?>
      <section>
      <?php
      while ($row = $result->fetch_assoc()) {//前後端串接重點是要把這段(去資料庫拿資料)放在html裡面
      ?>
        <div class="card">
            <div class="card__avatar">
            </div>
            <div class="card__body">
                <div class="card__info">
                  <span class="card__author"><?php echo '使用者：' . escape($row['username']); ?></span>
                  <form class="board__new-comment-form" method="POST" action="handle_manage.php">
                  <!--textarea name="role" rows="1" ><?php //echo $row['role'] ?></textarea>
                  <input type="hidden" name="id" value="<?php //echo $row['id'] ?>" />
                  <input class="board__submit-btn" type="submit"/-->
                  <p class="card__content">
                    <?php echo '權限：' . $row['role']; ?>
                    <?php echo 'id：' . $row['id']; ?>
                  </p>
                  <div>
                    <input type="radio" name="role" value='5' id="admin">
                    <label for="admin">管理員</label>
                    <input type="radio" name="role" value='1' id="common">
                    <label for="common">一般人</label>
                    <input type="radio"  name="role" value='2' id="banned">
                    <label for="banned">被停權</label>
                    <input type="hidden" name="id" value="<?php echo $row['id'] ?>" /><!--從這邊帶資料到handle_manage.php-->
                    <input class="board__submit-btn" type="submit">
                  </div>
                  </form>
                </div>
            </div>
        </div>
        <?php } ?>
      </section>
  </main>
</body>
</html> 