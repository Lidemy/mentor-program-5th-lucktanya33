<?php
require_once('check_access.php');
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
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><a href="admin.html">管理後台</a></li>
          <li><a href="#">登出</a></li>
        </div>
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <h1>新增文章</h1>
    </div>
  </section>
  <div class="container-wrapper">
    <div class="container">
      <div class="edit-post">
        <form action="handle_create_article.php" method="POST">
          <div class="edit-post__title">
            發表文章：
          </div>
          <div class="edit-post__input-wrapper">
            <input name ="title" class="edit-post__input" placeholder="請輸入文章標題" />
          </div>
          <div class="edit-post__input-wrapper">
            <textarea name ="content" rows="20" class="edit-post__content"></textarea>
            <input class="edit-post__btn" type="submit" />
          </div>
          <!--div class="edit-post__btn-wrapper">
          <input class="edit-post__btn" type="submit" / 這個按鈕拿不到post資料>
          </div-->
        </form>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>

