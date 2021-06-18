<?php
session_start();
require_once('conn.php');//引入和資料庫連結的檔案
require_once('utilis.php');

//讀取session資訊
$username = NULL;
if (!empty($_SESSION['username'])) {
  $username = $_SESSION['username'];
  echo '目前使用者' .$username. '<br>';
}
//權限 管理員:5  一般人:1 被停權:2
$role = NULL;
if (!empty($_SESSION['role'])) {
  $role = $_SESSION['role'];
  echo '權限' .$role. '<br>';
}

//從utilis.php拿會員資訊(用session帶過來的username拿)
$user = getUserFromUsername($username);

//跟資料庫拿資料
$stmt = $conn->prepare(
  'select '.
    'C.id as id, C.content as content, '.
    'C.created_at as created_at, U.nickname as nickname, U.username as username '.
  'from tanya_board_comments as C ' .
  'left join tanya_board_users as U on C.username = U.username '.
  'where C.is_deleted IS NULL '. //只會顯示is_deleted這一欄值NULL的留言
  'order by C.id desc'
);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
  print_r($conn->error);//可把連接的錯誤印出來
};
$result = $stmt->get_result();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言板-指揮中心</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
    <?php if (!$username) { ?>  
      <h2>請先登入，才能跟大家互動</h2>
      <a href="register.php">點擊註冊</a>
      <a href="login.php">點擊登入</a>
    <?php } else {
      echo '安安 ' . $user['nickname'] ;?>
      <a href="logout.php">登出</a> 
      <!--功能 修改暱稱-->
      <form method="POST" action="update_user.php">
        <div class="board__nickname">
          <span>修改暱稱：</span>
          <input type="text" name="nickname" />
          <input type="submit" class="board__submit-btn" value="修改"/>
        </div>
      </form>
      <?php //權限提示
      if ($role == '5') {
        echo '<h2>' . 'hi管理員' . '<h2>';
        echo '<a href="manage.php">後台</a>';
      } elseif ($role == '2') {
        echo '<h2>' . '目前被停權' . '<h2>';}
    } ?>

      <h1 class="board__title">Comments</h1>
      <!--新增留言錯誤訊息處理-->
      <?php 
        if (!empty($_GET['errCode'])) {//handle_add_comment.php拿過來的
          $getCode = $_GET['errCode'];
          $errorMsg = '有錯誤';//預設的錯誤訊息
          if ($getCode === '1') {
            $errorMsg = '資料不齊全';
          } elseif ($getCode === '2') {
            $errorMsg = '停權不能新增';
          } elseif ($getCode === '3') {
            $errorMsg = '留言請先登入！';
          };
          echo '<h2 class ="error">錯誤：' . $errorMsg . '<h2>';
        }
      ?>
      <form class="board__new-comment-form" method="POST" action="handle_add_comment.php">
        <textarea name="content" rows="5"></textarea>
        <input class="board__submit-btn" type="submit" />
      </form>
      <div class="board__hr"></div>
      <section>
      <?php
      while ($row = $result->fetch_assoc()) { //前後端串接重點是要把這段(去資料庫拿資料)放在html裡面
      ?>
        <div class="card">
            <div class="card__avatar">
            </div>
            <div class="card__body">
                <div class="card__info">
                  <span class="card__author"><?php echo $row['nickname']; ?></span>
                  <span class="card__time"><?php echo $row['created_at']; ?></span>
                  <?php if ( $role == '5') { ?> <!--編輯功能--> <!--權限:管理員可編輯所有留言-->
                    <a href="update_comment.php?id=<?php echo $row['id'] ?>">編輯</a>
                  <? } else { //非管理員只能編輯自己的
                    if ($row['username'] === $username) { ?>
                      <a href="update_comment.php?id=<?php echo $row['id'] ?>">編輯</a>
                    <? };
                  }?>
                  <?php if ( $role == '5') { ?> <!--刪除功能-->
                    <a href="handle_delete_comment.php?id=<?php echo $row['id'] ?>">刪除</a>
                  <? } else { 
                    if ($row['username'] === $username) { ?>
                      <a href="handle_delete_comment.php?id=<?php echo $row['id'] ?>">刪除</a>
                    <? };
                  }?>
                </div>
                <p class="card__content">
                  <?php echo escape($row['content']); ?>
                </p>
            </div>
        </div>
        <?php } ?>
      </section>
  </main>
</body>
</html> 