## 什麼是 Ajax？
**Asynchronous Javascript And XML**  通常簡稱 **AJAX**  ，直接翻譯的話是非同步的 Javascript 和 XML。  
不過只是因為以前的資料格式主流是 XML 並不是說 AJAX 的方式只能拿 XML 的資料，尤其現在大多是拿 JSON 資料。  
結論是，任何非同步和伺服器交換資料都可以叫做 AJAX。

## 用 Ajax 與我們用表單送出資料的差別在哪？
#### 用 HTML form 標籤傳資料  
在 form 標籤裡面帶  method = "GET" 發一個 request 到一個新的頁面（換頁），瀏覽器再 render 那些 response 資料，和 Javascript 沒有關係，是透過改變標籤來達到的
#### 用 Javascript 傳資料（AJAX）
用 Javascript 發一個 request 拿到 response ，並且沒有換頁就拿到資料。（用 `new XMLHttpRequest` 的方式）。舉例來說在 hw1 抽獎頁面中按下抽獎抵達得獎頁面的時候，網址並沒有改變一樣是 index.html  
#### 心得與一點疑問
這邊發現到完成  W8 的抽獎與直播作業都還沒發現這兩者的重大差異，或者是因為這兩個都是用 AJAX 做的，那麼用表單傳遞資料不知道會有什麼使用場景（google 一下都是寫 AJAX 居多）希望之後連同後端一起把網頁整合之後可以傳資料的徒徑有更完整的了解

## JSONP 是什麼？
**JSON with padding** 簡稱 **JSONP**  是一種憑藉 script 標籤不受同源政策管控在 src 標籤中帶一個 JS 的 link 再透過呼叫那個 LINK 來拿資料的方式。現在已經很少用了。


## 要如何存取跨網域的 API？
server 端在 header 加上 access-control-allow-origin 就可以拿到 response  
或者是依據該 API 的規定帶 header (Twitch V5 API 的方式)

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
第四週我們用 node 這個執行環境去呼叫 API 拿資料，這一次是透過 browser  去拿 API 的資料。遇到跨網域的問題是因為瀏覽器對資料的傳遞有更多的限制，其中一個是同源政策 CORS，透過瀏覽器發  request 只能存取同樣協定、同樣網域的 response。第四週用 node call API 則沒有這個問題。

