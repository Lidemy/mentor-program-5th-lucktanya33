# W15 複習週心得

## W11 週後端開發與資安
### 作業連結
[hw1 留言板](http://mentor-program.co/mtr04group1/lucktanya33/week11/board/index.php)

[hw2 部落格](http://mentor-program.co/mtr04group1/lucktanya33/week11/blog/index.php)

### 主要學習知識點
* 後端：PHP實作留言板部落格系統
* 資安：hash, XSS, SQL injection 的原理和處理方法

### 心得和遇到的困難
* 主要困難：資料庫設計
雖說第十一週主要著重在資安的部分，但和第九週其實一起是完整的後端開發學習，所以當初是第九週和第十一週的課程和作業是一起進行的。自己在 PHP 的撰寫上沒有遇到比較大的困難，雖然很亂但覺得蠻直覺的。在這兩週上面覺得比較難的東西是資料庫的設計，尤其是關聯資料庫的部分，其實不太知道 schema 該怎麼做。

## W12 前端
### 作業連結

[hw1 留言板 (前後端串接)](http://mentor-program.co/mtr04group1/lucktanya33/week12/hw1/board.html)

[hw2 todolist (jQuery)](http://mentor-program.co/mtr04group1/lucktanya33/week12/hw2/todo.html)
### 主要學習知識點
* 後端：用 PHP 做 API
* 前端：jQuery, Bootstrap
* 概念：Server side render vs Client side render

### 心得和遇到的困難
* 自己做 API 串接
這邊自己覺得蠻有趣的！可以串到自己做的 API 那種一氣呵成的感覺，然後對於能夠寫出一個供串接的 API 也是滿滿的成就感，說穿了原來開一個 API 就是先從資料庫把東西選出來再把它結構化的輸出成 json
* callback 不熟 js 不熟
在第一個作業留言板的載入更多這個功能上，當時真的是卡了兩天，都在讀老師的範例程式碼還有重複看影片還好後來有做出來。對於函式參數的傳遞還有 callback 的執行順序還沒那麼熟悉

## W13 前端工具
### 作業連結
 [hw1 部落格加入評論區](http://mentor-program.co/mtr04group1/lucktanya33/week13/hw2-plugin/blog.html)

[hw3 Twitch 前五名遊戲實況](http://mentor-program.co/mtr04group1/lucktanya33/week13/hw3-twitch/index.html)

### 主要學習知識點
* 前端：babel, gulp, webpack實作
* 前端：css 預處理器的使用如 SCSS
* 語法：fetch的使用, promise await async 概念
* 語法: ES6 解構賦值

### 心得和遇到的困難
* webpack 環境問題
對於應該要在什麼地方裝 webpack 的環境還是有點不熟，照理來說應該是有被 git 所管理的作業資料夾裡面裝 webpack 環境嗎？但是這樣這個資料夾應該就會多很多設定檔的改動 (package.json 的改動)，自己原本是先在本地的資料夾做好打包，再把打包完的檔案放到作業資料夾裡，還是應該先在作業資料夾做打包呢..
* fetch, promise
對 fetch, promise, .then 還不是很熟， 不曉得這邊通常要熟到什麼程度比較好 ><

## W14 部署
### 作業連結
http://gritty.tw/test/blog/index.php

### 主要學習知識點
* 後端：部署
* 後端：資料庫概念-transaction, lock, ACID

### 心得和遇到的困難
這週除了在註冊 AWS 台灣之星收不到認證簡訊以外，其他沒有太大的問題 哈哈

## W15 複習週心得
緩慢爬行兩週加上拖延症的複習週整理終於出來了...這次複習週是第一次複習週真的有停下來複習的一次XD 這次的東西不複習真的不行  (ఠ్ఠ ˓̭ ఠ్ఠ) 主要做了三件事情

1. 訂正 W12 W13
訂正過程學習到了
    * API 裡面下兩個 SQL
    * ES6 解構賦值語法
    * 使用 Eslint plugin

2. 第十五週網站前後端開發基礎測試
答題狀況 6/10，目前比較不熟的題目跟概念
    * Q3同源政策限制的對象
以Q3來說源先我以為，只要 API 那邊的 headers 沒有帶 CORS，前端就沒辦法發 request，但原來 <font color ="#f00">還是可以發 request 只是拿不到 response</font>
    * Q9 Window.onload 

3. 寫了小小的 side project [減肥計算機](http://gritty.tw/tdee/index.html) 
做完的心得...真的嘗試寫一個可以用的東西才發現～～要關注跟檢查的地方也太多啦！！UX 永遠優化不完
另外自己在寫的時候會把 event listener 包在 event listener 裡面可能總共有包到三層之多，自己不知道否合理哈哈哈，在想這部分也可能以後若開發比較複雜的網頁會比較知道~~



