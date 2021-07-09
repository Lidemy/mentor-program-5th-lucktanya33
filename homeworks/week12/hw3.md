## 這週這種後端負責提供只輸出資料的 API，前端一律都用 Ajax 串接的寫法，跟之前透過 PHP 直接輸出內容的留言板有什麼不同？
拿資料與渲染的方式不同
###方式一 第九週  
#### PHP 直接輸出內容(server-side rendering) 
1. 把資料從MySQL拿出來
2.  把資料跟HTML結合(UI)在一起（就是那些混雜再一起的HTML和PHP）
3. 回傳 HTML 給瀏覽器
4. browser render : 留言板  

### 方式二 第十二週
#### 前端串 API 拿資料(client-side rendring)
1. 後端把資料拿出來，變成某種格式(JSON)
2. 回傳給前端，前端發 request 跟 API 拿資料
3. 前端拿到資料之後再透過 JS render(動態的)

### 心得
所以說呈現出一樣的留言板檔案，第九週的檔案格式必須是 PHP，第十二週的檔案格式可以是 HTML，也就是說方式二完全是前後端分離的，感覺是現在業界比較推崇的方式（？）前端做前端的事，後端做後端的事。如果這樣的話是不是編輯留言、編輯權限等要使用者輸入東西的頁面，都要以前端為主做撰寫，再透過 API 「拿」或「送」資料過去後端。也就是說可能只有那些真的有操作到資料庫的檔案要做成 PHP 檔，就是 BE101 留言板，裡面以 `handle` 為開頭命名的那些檔案。


## 請簡單解釋什麼是 Single Page Application
### 介紹
單頁應用程式。指的是我們在一個單一網頁頁面操作就像在執行應用程式一樣，不會跳頁（更換網址），因此不會重新 render 打斷使用者體驗。比較有名的例子像是 Gmail，我們在 Gmail 的單一頁面上面，不會跳頁就可以完成寫信、寄信等動作，就像一個應用程式一樣。

### 心得與問題  
根據目前看到文章的定義的話，我想好像大部分當前流行 SAAS 服務都是以 SPA 的方式在開發網頁，例如： Canva、Trello。有些文章會說明 SPA 通常讓使用者使用上載入速度比較快，但蠻疑惑通常在使用這些網站的時候速度都比較蠻...(感覺有很大量的資料在處理...)


## SPA 的優缺點為何
### 優點
* 使用者體驗良好  
不需要一直看到重新render的空白
* 前後端分離  
兩邊想要處理不同的事情變得比較容易，例如：後端想換語言、前端想要更改 UI 畫面
* 容易改寫成 APP
   這一點是查資料看到的，還不了解其中原理

### 缺點
* 比較不利搜尋引擎優化，因為內容是動態新增的，程式碼幾乎是空白的，搜尋引擎的 bot 去爬的時候會覺得看不到東西
* 較不適合做較複雜的網站或應用程式
* 影響瀏覽器上一頁的功能

## 參考資料
* [前後端分離與 SPA](https://blog.techbridge.cc/2017/09/16/frontend-backend-mvc/)  內容包含：server-side rendering vs client-side rendering, SPA 簡介
*  [【譯】單頁面應用程式（SPA）vs 多頁面應用程式（MPA）：選擇哪個用於web開發](https://www.gushiciku.cn/pl/pGDD/zh-tw)  
*  [wiki 單頁應用](https://zh.wikipedia.org/wiki/%E5%8D%95%E9%A1%B5%E5%BA%94%E7%94%A8)
*  [Why I hate your Single Page App
](https://www.freecodecamp.org/news/why-i-hate-your-single-page-app-f08bb4ff9134/)
這篇解釋了很多人誤用 SPA 的狀況，並且提到 ROCA




