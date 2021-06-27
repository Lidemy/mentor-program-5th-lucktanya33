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
      </ul>
    </div>
  </nav>
  <section class="banner">
    <div class="banner__wrapper">
      <div>登入頁面</div>
    </div>
  </section>
  <?php //登入錯誤訊息處理
        if (!empty($_GET['errCode'])) {
          $getCode = $_GET['errCode'];
          $errorMsg = '有錯誤';
          if ($getCode === '1') {
            $errorMsg = '某一欄沒有填寫喔！';
          } else if ($getCode === '2') {
            $errorMsg = '帳號或密碼錯誤';
          };
          echo '<h2 class ="error">錯誤：' . $errorMsg . '<h2>';
        }
  ?>
  <div class="login-wrapper">
    <h2>Login</h2>
    <form action="handle_login.php" method="POST">
      <div class="input__wrapper">
        <div class="input__label">帳號</div>
        <input class="input__field" type="text" name="username" />
      </div>
      <div class="input__wrapper">
        <div class="input__label">密碼</div>
        <input class="input__field" type="password" name="password" />
      </div>
      <input type='submit' value="登入" />
    </form>   
  </div>
</body>
</html>