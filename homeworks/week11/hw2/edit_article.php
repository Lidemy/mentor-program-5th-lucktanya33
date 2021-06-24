<?php
session_start();
require_once('conn.php');
require_once('utilis.php');
require_once('check_access.php');

//拿GET來的id資料
$id = $_GET['id'];

//讀取session資訊
$username = NULL;
if (!empty($_SESSION['username'])) {
  $username = $_SESSION['username'];
  echo '目前使用者' .$username. '<br>';
}

//從utilis.php拿會員資訊(用session帶過來的username拿)
$user = getUserFromUsername($username);

//跟資料庫拿資料
$stmt = $conn->prepare("select * from tanya_blog_articles where id = ?");
$stmt->bind_param("i", $id); //把GET來的id放進去當SQL指令的參數
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
  print_r($conn->error);//可把連接的錯誤印出來
};
$result = $stmt->get_result();//拿到結果並存到$result裡面
$row = $result->fetch_assoc();//把結果$result的row拿出來
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
        <a href='index.php'>回首頁</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="#">文章列表</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><a href="logout.php">登出</a></li>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>編輯文章</h1>
    </div>
  </section>
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

  <div class="container-wrapper">
    <div class="container">
      <div class="edit-post">
        <form action="handle_edit_article.php" method="POST">
          <div class="edit-post__title">
            編輯文章：
          </div>
          <div class="edit-post__input-wrapper">
            <input name ="title" value = <?php echo escape($row['title']);?> class="edit-post__input" />
          </div>
          <div class="edit-post__input-wrapper">
            <textarea name ="content" rows="20" class="edit-post__content"><?php echo escape($row['content']);?> </textarea>
            <input type="hidden" name="id" value="<?php echo $row['id'] ?>" /><!--透過此帶id過去handle_update_comment.php-->
            <input class="edit-post__btn" type="submit" /><!--這邊有問題為什麼一定要用上面那個 type=""-->
          </div>
        </form>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>

