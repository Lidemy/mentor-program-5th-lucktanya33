## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
### 加密 Encrpt (一對一關係)

明文>加密>密文

密文>解密>明文

有鑰匙就可以解開

### 雜湊 Hash (多對一關係)

明文>hash> sknjwdhidh

無法解開，因為`明文2` 也可能變成  sknjwdhidh

所以我們沒辦法判定  sknjwdhidh 是`明文`還是`明文二`

備註：如果兩個東西共享一個hash後的結果叫做 「碰撞」

### 為什麼密碼要雜湊後才存入資料庫？
避免有人拿到一整個資料庫之後就知道使用者的密碼。使用者註冊時密碼經過 hash，存在資料庫裡面的會是 hash 過後的密碼。  
使用者再登入的時候該字串會被再去拿去用同樣的方法 hash ，看值是否一樣，一樣就可以登入了。

### 參考資料
* Lidemy [BE101] 用 PHP 與 MySQL 學習後端基礎 真正的實戰：留言板 - 修正問題篇 說明存明碼的問題還有如何使用PHP hsah 函式
* [[資訊安全] 密碼存明碼，怎麼不直接去裸奔算了？淺談 Hash , 用雜湊保護密碼](https://medium.com/@brad61517/%E8%B3%87%E8%A8%8A%E5%AE%89%E5%85%A8-%E5%AF%86%E7%A2%BC%E5%AD%98%E6%98%8E%E7%A2%BC-%E6%80%8E%E9%BA%BC%E4%B8%8D%E7%9B%B4%E6%8E%A5%E5%8E%BB%E8%A3%B8%E5%A5%94%E7%AE%97%E4%BA%86-%E6%B7%BA%E8%AB%87-hash-%E7%94%A8%E9%9B%9C%E6%B9%8A%E4%BF%9D%E8%AD%B7%E5%AF%86%E7%A2%BC-d561ad2a7d84)  
   最淺白的一篇，適合初步了解
* [一次搞懂密碼學中的三兄弟 — Encode、Encrypt 跟 Hash
](https://medium.com/starbugs/what-are-encoding-encrypt-and-hashing-4b03d40e7b0c)
* [聽說不能用明文存密碼，那到底該怎麼存？](聽說不能用明文存密碼，那到底該怎麼存？)   
   介紹各種現代加密、雜湊方法的優劣勢以及被破解的狀況。並作出總結，以現今電腦的運算能力，其實現在很多hash也已經被破解了，還是 hash 再加鹽(salt) 會比較安全
* [Online generator md5 hash](http://www.md5.cz/)

## `include`、`require`、`include_once`、`require_once` 的差別

### include 和 require 的差別
include 在遇到引入錯誤的時候會繼續執行程式碼，產生 warning 。require 遇到錯誤的時候會產生 fetal error，停止執行下面的程式碼。  
舉例來說，在這週的作業裡面，我們先連結一個 `conn.php` 在裡面完成對資料庫的連線，在每一個需要和資料庫互動的 PHP 裡面第一行引入使用。當我故意改變檔名為 `connn.php` ，製造出連線的錯誤，分別使用 include 和 require 引入，並在引入下面寫下 `echo "HI";`     

**include 引入檔案**
![code-include_connn](https://i.imgur.com/GpeRtqg.png)
結果
![](https://i.imgur.com/mmpQSTF.png)

**require 引入檔案**
![code-require_connn](https://i.imgur.com/nEIFG3Y.png)
結果
![](https://i.imgur.com/jr9AtBr.png)


可以看到結果，用 incude 會在印出 **HI**，用 require 只會顯示錯誤不會印出任何東西。  
  
  這邊除了w3schools 的解釋外，我認為從英文的詞義，也可以略知 include 和 require 的意思，include 是包含，把外面的程式碼包含進來。require 則是「需要、必要」，如果沒有的話程式碼是沒辦法執行的。

### 有加入_once 後的差別 (`include_once`, `require_once` )
加入 `_once` 代表在這個程式檔案裡面只會引入這個檔案一次，避免掉因為重複引入可以重複定義函式或對變數重複賦值所產生的問題。

### 參考資料
* [ w3schools: PHP include and require Statements
](https://www.w3schools.com/php/php_includes.asp)
* [PHP官網: include_once
](https://www.php.net/manual/en/function.include-once.php)



## 請說明 SQL Injection 的攻擊原理以及防範方法
### 介紹
SQL Injection 指的是，Clinet 端試圖在可以輸入值的地方輸入一些字串，透過這些字串和原本 SQL 指令字串結合，形成一個新的字串，去達到非法或惡意的功能。例如：拿到權限、竊取資料、改變資料、刪除資料庫等等，原本不能夠是此訪客能夠做的事情。  
### 例子
原本的指令為  

```php  
  $sql = sprintf(
    "select * from tanya_blog_users where username='%s' and password='%s'",
    $username,
    $password
  );
```
使用者輸入 `anything 'or'1'='1` 做為密碼  
核對密碼的部分，變成 `password=' anything 'or'1'='1 '`  
1 = 1   為真，認證成功可以登入
### 在 PHP 解決 SQL Injection
以 PHP 來說是以 [Prepare Statement](https://www.php.net/manual/en/mysqli.quickstart.prepared-statements.php) 的方式來防範 SQL Injection，Prepare Statament 的方式會分為兩個階段，準備語句階段，和執行階段，在準備的語句上以 `?` 代入參數，再在將參數 bind 起來送到語句裡面。

### 參考資料
* [SQL Injection MDN](https://developer.mozilla.org/zh-TW/docs/Glossary/SQL_Injection)
* [資料隱碼攻擊：三種](https://ithelp.ithome.com.tw/articles/10189201)
* [PHP防範 SQL Injection 的內建函式及説明：Prepare Statement](https://www.php.net/manual/en/mysqli.quickstart.prepared-statements.php)



##  請說明 XSS 的攻擊原理以及防範方法
###  介紹
Cross-site Scripting 意思是在別人的網站上執行 Javascript。  
在任何可以輸入文字的地方，輸入程式碼。應用範例：把網站導向到釣魚網站，用 document.cookie 偷 cookie 再偷 session id ，就可以偷別人的身份
處理方式：把它當成文字，而不是程式碼
### 在PHP 解決 XSS 問題
用 PHP 內建的 `function htmlspecialchar ` 來逃逸這字串。  在一個專案共用function 的檔案 `utils.php` 裡面建立一個 escape function ，並且使用PHP 內建的 `htmlspecialchar ` function 回傳值。  
之後把任何有 echo 網頁拿到的值的地方加到 escape 這個 function。例如 `echo $row['content'];` 變成 `echo escape($row['content']);`

## 請說明 CSRF 的攻擊原理以及防範方法
### 介紹
**CSRF（Cross-site Request Forgery）跨站偽造請求**  
又稱作 one click attack。意思是說在 Client 已經登入 A 網站的情況下（帶有 A網站cookie），在 B 網站發送一個請求給 Client ， Client 點擊了就會執行了那個請求。為何會成立？當下雖然是在 B 網站，但是是並未從 A 網站登出的。  

### 例子  
舉例來說，如果刪除文章只需要 GET 請求。只要誘導使用者點選 **`<a href='user_site/delete?articleId=1234'>`美女走光圖</a>這類的鏈結，使用者就會在不知情的情況下，刪除了某篇文章。** (舉例來源：參考資料ㄧ)


### 防範方法
####方法一 加上圖形驗證碼、簡訊驗證碼、不保持在登入狀態
這樣的做法，可以確保不會被 CSRF 攻擊，但是在使用者體驗上偏不好。

####方法二 加 CSRF Token
Server 生成一個 CSRF token給 Client端，Client 端發 request 給 Server 時要確認這個 CSRF  token 是否和原本發的一樣。

####方法三 從瀏覽器確認 domain 來源  
在 Cookie 設置中加入 `SameSite` 的請求，如果不是來自於同一個 domain 發的要求就不要相信。
### 參考資料
* [從防禦認識CSRF
](https://www.ithome.com.tw/voice/115822)
* [讓我們來談談 CSRF
](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)
* [CSRF攻擊原理與常見解決方案
](https://segmentfault.com/a/1190000037725856)

## 心得
整理完幾個常見的資安問題：明碼密碼、XSS、SQL Injection、CSRF 。覺得裡面對 CSRF 比較不熟悉，但會有一個 OS，所以是不是用 GET 的方式去拿到資料或執行指令，是很方邊但其實是不太安全的。


