
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>註冊</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
      <a href="index.php">回留言板</a>
      <a href="login.php">登入</a>
      <h1 class="board__title">註冊</h1>
      <?php //錯誤訊息處理
        if (!empty($_GET['errCode'])) {
          $getCode = $_GET['errCode'];
          $errorMsg = '有錯誤';
          if ($getCode === '1') {
            $errorMsg = '某一欄沒有填寫喔！';
          } else if ($getCode === '2') {
            $errorMsg = '這個帳號有人用過了';
          };
          echo '<h2 class ="error">錯誤：' . $errorMsg . '<h2>';
        }
      ?>
      <form class="board__new-comment-form" method="POST" action="handle_register.php">
        <div class="board__nickname">
          <span>暱稱：</span>
          <input type="text" name="nickname" />
        </div>
        <div class="board__nickname">
          <span>帳號：</span>
          <input type="text" name="username" />
        </div>
        <div class="board__nickname">
          <span>密碼：</span>
          <input type="password" name="password" />
        </div>
        <input class="board__submit-btn" type="submit" />
      </form>
  </main>
</body>
</html> 