# W14申論題 (DNS, LOCK, NOSQL, ACID)
## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？

### 什麼是 DNS
DNS，Domain name system 負責把域名轉換成IP位置
舉例來說：Google.com是域名，拿到域名之後去 DNS 找對應的 IP 位址。

### Google 公開 DNS
對一般大眾的好處是用 google 的 DNS 連線可能會比較快也較安全。對 google 的好處是 goole 可以拿到很多大家瀏覽網站的資料，因為要到一個網站都要先去 DNS 解析成IP位址

### 參考資料
* [Google Public DNS上網跑更快，用戶端趕快更換IPv4 DNS設定8.8.8.8與8.8.4.4](http://www.pcdiy.com.tw/detail/1412)
* [[問題] 最快的DNS是哪家？](https://www.ptt.cc/bbs/MobileComm/M.1559401324.A.754.html)


## 什麼是資料庫的 lock？為什麼我們需要 lock？
![](https://i.imgur.com/cDeyBKW.png)
Lock 是一種下SQL query的方式，如圖片這樣在 query 後面加上 `for update`，在一筆在更新之前先把這筆資料鎖起來。避免時間很相近的兩筆 request，在資料庫還沒更新的情況就同時執行（race consition）  

以一個購物網站的搶購頁面來說，如果沒使用 lock 可能造成超賣的狀況，明明只有一個東西可以賣，但是 client 端同時發出兩個購買的request，就會變成兩個人都買到，但資料庫的數量其實只有 1 可以賣，最後商品數量還可能變成負的。    

使用 lock 可以確保，一個 request 對 SQL 下的指令更新完才處理另外一筆 request。因為這樣要等待的特性，同時也會讓資料庫效能變慢。

### 參考資料
* [程式導師實驗計畫：Lesson 8-2 之資料庫](https://www.youtube.com/watch?v=iDG8Ha2uZPs&ab_channel=Lidemy%E9%8B%B0%E5%AD%B8%E9%99%A2)

## NoSQL 跟 SQL 的差別在哪裡？
NoSQL(Not only SQL)，是一種非關聯式資料庫。沒辦法使用 SQL 這樣的結構化查詢程式語言。
MySQL-> 關聯式資料庫，一個一個table關聯再一起
NoSQL-> 用 key-value 來存，通常用來存一些結構不固定的資料
有名的 NoSQL資料庫：mongoDB

### 參考資料
* [程式導師實驗計畫：Lesson 8-2 之資料庫](https://www.youtube.com/watch?v=iDG8Ha2uZPs&ab_channel=Lidemy%E9%8B%B0%E5%AD%B8%E9%99%A2)
* [什麼是SQL？什麼是NOSQL? 用簡單範例看一下他們的差異吧！](https://codegym.tech/blog/sql_vs_nosql.html)

## 資料庫的 ACID 是什麼？
ACID 是 trancsaction 的四個重要特性。
* 原子性 Atomicity
* 一致性 Consistency
* 隔離性 Isolation
* 持久性 Durability

以一筆金錢交易的執行(transaction)來說明的話：  
`原子性` 指的在整個 transaction 的連續過程中，只有可能全部完成或是全部失敗，不會說 A 轉帳給 B，只有在 A 資料庫的金額扣掉 20 塊，沒有在  B 的資料庫金額加上 20 塊。  
`一致性` 根據維基的定義 **在事務開始之前和事務結束以後，資料庫的完整性沒有被破壞。這表示寫入的資料必須完全符合所有的預設約束、觸發器、級聯回滾**
`隔離性` 不會同時對一個值做修改，防止多個事物同時觸發
`持久性` transaction 結束後對資料的修改事永久的，不會因為系統故障改變

備註：一致性的定義目前還不是很了解所以先援引維基的敘述

### 參考資料
* [程式導師實驗計畫：Lesson 8-2 之資料庫](https://www.youtube.com/watch?v=iDG8Ha2uZPs&ab_channel=Lidemy%E9%8B%B0%E5%AD%B8%E9%99%A2)
* [維基 ACID](https://zh.wikipedia.org/wiki/ACID)
* [如何理解数据库事务中的一致性的概念？
](https://www.zhihu.com/question/31346392)