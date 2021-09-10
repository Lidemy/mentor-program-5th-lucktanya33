## 什麼是 MVC
MVC 是一種軟體設計的模式，把負責的地方切分為 Model, View, Controller。
以這週的 hw1 部落格的首頁如何實踐 MVC 的話可以如以下描述：
檔案結構
![](https://i.imgur.com/nEU5VzM.png)
專案資料夾裡面會有models, views, controllers 資料夾。
專案的起始點是 `index.js`

### 我們看到部落格首頁的背後經過了什麼?
當我們拜訪部落格首頁 `https://localhost:5001/`，等於是發送了一個 GET 到這個程式

#### 階段:index.js
`index.js` 裡面會執行以下程式碼
![](https://i.imgur.com/aKZeYAf.png)
當拜訪localhost:5001/ 的時候請 articleController 裡面的 index function 去處理
![](https://i.imgur.com/fwhWt1f.png)
在 index.js 的一開始就把專案裡面 controllers資料夾 裡面的 control_articles 引入為 `articleController` 所以現在可以交由 control_article.js 處理了

#### 階段:controllers control_article.js
![](https://i.imgur.com/BbLpbiD.png)
在 contro_article.js 裡面先跟 models require db，然後宣告一個物件裡面有各個處理的 function
![](https://i.imgur.com/VEX3WHY.png)
首頁的處理 function index 這邊，用sequelize 的語法拿到資料`Articles` 再把拿到的 `資料Articles` 傳進 index.ejs 渲染出來

#### 階段:views index.ejs
在 index.ejs 裡面寫 html，然後把在index.js 和 controller 裡面的資料傳過去就可以把畫面渲染出來

#### 階段:models
models 裡面負責拿資料，這邊由於 models 是用 sequelize 實作的，models資料夾裡面的檔案都是下 sequelize CLI 以後自動產生的

由以上我們看到這個由 express 所做出來的部落格首頁可以一窺 MVC 的架構是怎麼運作的

## 這週部署的心得
這週的部署心得，覺得好像 heroku 也沒有比 W14 的部署方式簡單很多 XDD 出問題的時候那一大串 log 跑出來也有點茫茫的XD
以下是這週有特別學到的東西
* 學習用 環境變數
敏感資訊用環境變數取代，在終端機執行指令的時候再把敏感資訊傳進去（不過這邊不確定是目前學到的是在 express 的特殊用法，還是用 node 跑 js 都可以這樣用）
* 學會用 Sequel Pro
一個在本地操作 MySQL 的介面
* 學會使用 `.gitignore`
原來 node_modules 是要放在這邊，真的學到了！學習 webpack 那邊就覺得很奇怪，難道這些檔案都要 commit 上去...


## 寫 Node.js 的後端跟之前寫 PHP 差滿多的，有什麼心得嗎？

之前w9 w11 用 PHP 寫後端因為不是用框架，感覺比較難跟這一次用 Node.js express 這樣框架撰寫來比較
可能之後有機會用 PHP 的 laravel 寫再來比較看看XD

