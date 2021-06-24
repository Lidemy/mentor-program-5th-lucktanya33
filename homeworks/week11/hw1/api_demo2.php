<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言板</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
      <h1 class="board__title">Comments</h1>
        <form class="board__new-comment-form">
          <textarea name="content" rows="5"></textarea>
          <input class="board__submit-btn" type="submit" /> 
        </form>
      <div class="board__hr"></div>
      <section>

      </section>
  </main>
  <script>
    var request = new XMLHttpRequest();
    request.open('GET', 'api_comments.php', true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        var resp = this.response;
        var json = JSON.parse(resp)
        var comments = json.comments

        for(var i=0; i<comments.length; i++) {
          var comment = comments[i]
          var div = document.createElement('div')
          div.classList.add('card')
          div.innerHTML = `
            <div class="card__avatar"></div>
            <div class="card__body">
                <div class="card__info">
                  <span class="card__author">
                    ${comment.nickname}(@${comment.username})
                  </span>
                  <span class="card__time">
                    ${comment.created_at}
                  </span>
                </div>
                <p class="card__content">${encodeHTML(comment.content)}</p>
            </div>
          `
          document.querySelector('section').appendChild(div)
        }
      }
    };
    request.send();


    function encodeHTML(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
    }
  </script>
</body>
</html> 