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

//從utilis.php拿會員資訊(用session帶過來的username拿)
$user = getUserFromUsername($username);

//跟資料庫拿資料
$stmt = $conn->prepare(
  "select * from tanya_blog_articles " .
  "where tanya_blog_articles.is_deleted IS NULL ".//soft delete功能
  "limit 5 "
);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);//print_r($conn->error);//可把連接的錯誤印出來
};
$result = $stmt->get_result();
?>

<!DOCTYPE html>

<html>
<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='index.html'>大航海時代的角落</a>
      </div>
      <ul class="navbar__list">
      <!--判斷是否登入-->
      <?php if (!$username) {?>
        <div>
          <li><a href="articles.php">文章列表</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><a href="login.php">登入</a></li>
        </div>
        <?php } else {?>
        <div>
          <li><a href="create_article.php">新增文章</a></li>
          <li><a href="logout.php">登出</a></li>
        </div>
        <?php }?>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>在這裡可以自由的分享標的或股市心得</h1>
      <div>在這裡可以自由的分享標的或股市心得</div>
    </div>
  </section>
  <?php //各種功能錯誤訊息處理
        if (!empty($_GET['errCode'])) {
          $getCode = $_GET['errCode'];
          $errorMsg = '有錯誤';//預設
          if ($getCode === '1') {
            $errorMsg = '資料不齊全';
          };
          echo '<h2 class ="error">錯誤：' . $errorMsg . '<h2>';
        }
      ?>
  <?php
  while($row = $result->fetch_assoc()) {?>

  <div class="container-wrapper">
    <div class="posts">
      <article class="post">
        <div class="post__header">
          <h2><?php echo escape($row['title']); ?></h2>
          <?php if ($username) {?>
          <div class="post__actions">
            <a class="post__action" href="edit_article.php?id=<?php echo $row['id'];?>">編輯</a>
            <a class="post__action" href="handle_delete_article.php?id=<?php echo $row['id'];?>">刪除</a>
          </div>
          <?php }?>
        </div>
        <div class="post__info">
          <?php echo $row['created_at']; ?>
        </div>
        <div class="post__content"><?php echo substr(escape($row['content']),0, 300);?><!--substr顯示比較少的字數-->
        </div>
        <a class="btn-read-more" href="post.php?id=<?php echo $row['id'];?>">看完整文章</a>
      </article>
    </div>
  </div>
  <?php }
  ?> 
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>