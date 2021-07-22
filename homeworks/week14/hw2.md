# 部署網站紀錄 (macOS BigSur, AWS EC2)

## 環境說明
本地電腦作業系統 macOS BigSur 使用 AWS EC2 進行靜態網站與動態網站的部署

## Step1 AWS買主機服務並 launch
註冊完之後到 AWS management console 點 EC2 服務

**Step1 : Choose Amazon Machine Image**
![](https://i.imgur.com/sOkBuG5.png)
有不同的主機作業系統可以選擇

選這個 Ubuntu
![](https://i.imgur.com/JHVIkkg.png)

Select Ubuntu 之後可以選主機的等級
![](https://i.imgur.com/tSp7ge6.png)
選擇按鍵 ： configure instance details 
看有哪些instance的設定

![](https://i.imgur.com/gvJsEg1.png)
大部分都是網路相關的設定，可以直接略過
按 **Add Storage**
![](https://i.imgur.com/dQ9MO6L.png)
可以看主機硬碟要多大，這邊一樣直接用預設的8G
按 **Add Tags**
![](https://i.imgur.com/x79UimQ.png)
這是用來方便管理主機，用不到直接下一步  security group

![](https://i.imgur.com/2Y1ZMdc.png)
我們只限定用 SSH 連到主機 port 是22port 

把http 和 80 port 加進來
![](https://i.imgur.com/q5aDzuy.png)

按下 **launch**
![](https://i.imgur.com/pLDDZ4x.png)
他會產生一個上面寫了密碼的檔案，之後就是用這個有密碼的檔案來跟遠端主機連線
![](https://i.imgur.com/etBgMog.png)
![](https://i.imgur.com/qrTSCru.png)
下載後按下 **launch instance**![](https://i.imgur.com/brpB7pn.png)
點擊連結就可以看到已經被 lunch 的 instance
![](https://i.imgur.com/8CshLZV.png)
勾選該instance的藍色方塊，可以看到ip資訊

## Step2 連到剛剛在 AWS launch 的主機
### 老師示範影片的連線過程
**問題 1: 缺少公鑰**
嘗試連線到剛剛 launch 的主機
![](https://i.imgur.com/rjEUyn9.png)
因為沒有 public key 而被 denied

**問題 2: too open**
指令 `ssh` + `-i` + `key檔案路徑` + `買的主機的IP`
![](https://i.imgur.com/vbzsTWg.png)
遇到問題：permission are too open
指令 `chmod` + `400` + `key檔案路徑`
**沒有指令使用者**
解決了之後繼續打以上指令，但又遇到 connection closed 
遇到問題2 ：有可能是因為沒有指定要用哪一個使用者 
![](https://i.imgur.com/bIiOFqs.png)
所以把使用者名稱改成 ubuntu

就可以成功連線了
![](https://i.imgur.com/lRSSqML.png)
長得跟原本 mac 的 terminal 不一樣
![](https://i.imgur.com/RPCy6mk.png)

### 我的連線過程
1. 從AWS EC2 介面進入到連線到執行個體
按EC2執行個體的id
![](https://i.imgur.com/a8dhNA2.png)
進入後按連線，可以看到連線的選項
2. 選擇 SSH用戶端
 ![](https://i.imgur.com/E6q1f6l.png)
選擇 SSH 用戶端並在終端機執行範例指令
"week14-hw.pem" 是金鑰的檔案名稱
在終端機執行的時候換成 金鑰的檔案路徑

3. 終端機執行連線
貼上剛剛的範例指令，把`""`裡面變成金鑰檔案路徑
![](https://i.imgur.com/NbPQ47H.png)
連線成功看到主機變成 ubuntu

## Step3 架LAMP環境
`LAMP環境` = `linux` + `Apache` + `MySQL` + `PHP`
### 1. 進行更新
![](https://i.imgur.com/kQhahLa.png)
使用 `apt` 這個套件管理工具來做更新(類似mac的brew) 
（問題：所以剛剛連到aws主機的時候，我們就已經安裝 ubuntu 在電腦裡面了嗎？不然現在怎麼可以直接做更新了？）

### 2. 安裝 tasksel 輔助軟體
![](https://i.imgur.com/Sg1dfqK.png)
用 apt 安裝 tasksel 這個輔助軟體

### 3. 架設 lamp 環境
![](https://i.imgur.com/otcawdk.png)

![](https://i.imgur.com/v7ojz0s.png)
### 4. 測試是否正常
`方法1`用 curl 指令打 localhost
![](https://i.imgur.com/2LdjMeB.png)
![](https://i.imgur.com/mN1ZmYg.png)
可以看到東西就代表有成功

`方法2`用mac的主機看
開mac的terminal
![](https://i.imgur.com/d8JWIRr.png)

指令： `telnet` + `ip` + `port`
備註：MAC OS majove 目前無法使用telnet 

`方法3`直接把ip貼到chrome 可以看到 ubuntu 就是連好了
![](https://i.imgur.com/xLarX6j.png)

## Step4 架設phpmyadmin並在瀏覽器登入
根據[此文章](https://mtr04-note.coderbridge.io/2020/09/15/-%E7%B4%80%E9%8C%84-%08-%E9%83%A8%E5%B1%AC-aws-ec2-%E9%9B%B2%E7%AB%AF%E4%B8%BB%E6%A9%9F-/)分享步驟執行

### 1. 在遠端環境上安裝phpmyadmin
### 2. 測試在瀏覽器是否可以打開
網址輸入 `ip4位址` +`phpmyadmin`
![](https://i.imgur.com/KWOsUOF.png)


### 3. 改MySQL權限變成可以在phpmyadmin登入
登入成功
![](https://i.imgur.com/BwAcbye.png)

### 過程中錯誤排除(404 500 error)
[紀錄](https://hackmd.io/@lucktanya33/BJ8SfcnTu)

## Step5 測試遠端可以開啟html和php檔案
1. 到根目錄
![](https://i.imgur.com/i0XfBgi.png)
裡面的 index.html 就是我們輸入遠端ip時候看到的apache 成功連線畫面（可以用 vim查看）
2. 修改權限可以新增檔案
![](https://i.imgur.com/59NA6u1.png)
發現沒有權限新增檔案
![](https://i.imgur.com/qYpTPsz.png)

3. 寫入東西到新增的檔案查看
![](https://i.imgur.com/30JOook.png)
網址輸入 `ipv位址/a.html` 就可以看到hello
![](https://i.imgur.com/ENlsNBd.png)

## Step6 FileZilla 連線到 server
![](https://i.imgur.com/4aY0guV.png)
建立好新站台並填寫完設定
同時選擇金鑰檔案之後連線

## Step7 靜態網站部署(純 html )
把檔案放到主機的根目錄裡面
根目錄 `/var/www`
![](https://i.imgur.com/A8504Ju.png)

在瀏覽器輸入網址 
`http://3.143.7.83/html-test/restaraunt/index.html` 
就有畫面了！！
![](https://i.imgur.com/Lp5qW7C.jpg)

## Step8 動態網站部署
### 匯出本地資料庫到遠端
1. 匯出本地的資料庫
2. 在遠端新建一個資料庫
![](https://i.imgur.com/eWESlYu.png)
![](https://i.imgur.com/yRfFtgI.png)

匯入成功
![](https://i.imgur.com/SDx3pxT.png)


3. 匯入剛剛下載的本地資料庫
4. 新建一個和本地的資料庫user
密碼也設定的和本地的  `conn.php` 裡面的一樣，就不用再重新做一個和資料庫連線的檔案
![](https://i.imgur.com/a1KbmPh.png)


### 檔案傳到 FileZilla
把剛剛在本機 `lampp/htdoc` 測試沒有問題的專案資料夾整包拉到 FileZilla 的 `var/www/html` 裡面再連線
![](https://i.imgur.com/wO9qno4.png)

一樣輸入相對應的網址，就可以看到網頁了
![](https://i.imgur.com/zc6JBNw.png)
備註：如果已經連到MySQL但php還無法顯示，這邊可能要改遠端主機php的設定檔讓short tags 從 off 變成 on 網頁才可以呈現，參考[MTR05] W14 裡面的示範 part4 影片

## 參考資料
* Lidemy [MTR05] W14 部署範例
* [部屬 AWS EC2 雲端主機 + LAMP Server + phpMyAdmin](https://mtr04-note.coderbridge.io/2020/09/15/-%E7%B4%80%E9%8C%84-%08-%E9%83%A8%E5%B1%AC-aws-ec2-%E9%9B%B2%E7%AB%AF%E4%B8%BB%E6%A9%9F-/)