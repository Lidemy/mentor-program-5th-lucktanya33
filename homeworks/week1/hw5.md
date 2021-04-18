## 請解釋後端與前端的差異。
使用者看得到前端的頁面，但看不到後端的頁面 。前端主要是接收使用者輸入資料並且顯示回傳資料給使用者看的地方。後端主要是儲存使用者輸入與其他資料的地方。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

### 過程一：到達 Google.com這個地方
1. 確認緩存裡面有沒有 Google.com的 IP位址
2. 有的話，直接到達 Google.com。沒有的話拜訪 DNS伺服器
3. DNS伺服器解析出 Google.com 的 IP位址 （意為，告訴我們地址在哪邊

### 搜尋 Javascript 並且看到搜尋結果
1. 在這個地方搜尋"Javascript"，瀏覽器送 request 給這個 IP位址
2. 伺服器接收到 request
3. 伺服器把 request 發給後端資料庫
4. 後端資料庫找搜尋時javascript，應該要呈現的資料
5. 資料庫把資料丟到伺服器(response)
6. 伺服器把資料(response)丟給網站(瀏覽器)  
7. 網站根據這個回應呈現相對應畫面 

**備註**  
DNS Domain name system 負責把域名轉換成IP位置   
舉例來說   
Google.com是域名   
203.211.0.39是IP位址
  
所以在到達 google.com這個地方之前，我們還要先跟DNS問地址才有辦法到囉？ 答：要看要訪問的 IP 有沒有在緩存裡面，沒有的話就要跟  DNS問


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. killall 強制關閉
例如  `killall Spotify`

2. df /tmp 顯示文件系統的總空間和可用空間

3. env  顯示當前的環境變量