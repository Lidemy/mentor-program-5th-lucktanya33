## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
都是用來儲存字元型別的資料。在 MySQL 裡面 char, varchar, text 都是比較常見來儲存字元的資料。 text 用來儲存較長的資料，最長是 2^31-1 個字元
；char 跟 varchar  用來儲存較短的資料，char 是固定長度的，varchar 不是。  

####參考資料
[MySQL中欄位型別char、varchar和text的區別
](https://www.796t.com/article.php?id=6967)


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
####Cookie 是什麼？  
幫助紀錄 http 狀態的東西，http是 stateless 的。Cookie 常用的運用有：維持登入狀態，數位廣告的再行銷(retargetting)，就像我們發現每次看過一個商品之後就開始推送相關的廣告，這就是因為我們繼續瀏覽網頁的時候已經帶上相關商品資訊的 Cookie 了
 
####HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的  
以下以登入功能為例，說明 Cookie 的運作方式。登入系統的架構是我們在 `login.php` 這一頁進行登入，如果登入成功就跳轉到留言板首頁 `index.php` ，但是有一個問題，登入後導回到首頁的時候我們還是會看到「註冊」跟「登入」按鈕（這個首頁原本就有的）。所以若是登入成功（MySQL帳密核對正確並且資料庫裡面有資料），除了跳轉到首頁以外還要設置 Cookie ，例如：我的帳號是 1111 那就設置一個 `username:1111` 的 Cookie 在 header 裡面。  

然後我們在首頁 `index.php` 裡面在寫下一個判斷式，根據傳過來的 header 是否有帶使用者的資料來決定要顯示「已登入」或是「未登入」的畫面。  

####參考資料 
**Lidemy課程影片** [BE101] 用 PHP 與 MySQL 學習後端基礎：該怎麼記住登入狀態？Cookie 簡介與實作 [程式碼] (https://github.com/Lidemy/BE101-mysql-and-php/commit/454b896e1ec11614a3dfd2b1d92cbce0d035bf80)



## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
使用者體驗的部分：沒有忘記密碼的功能，如果忘記密碼不知道該怎麼辦。  同樣也沒有修改密碼的功能。  

資料管理的部分：註冊沒有限制要有 email 或 手機才能註冊，可能造成一直註冊吃掉資料庫的容量。









