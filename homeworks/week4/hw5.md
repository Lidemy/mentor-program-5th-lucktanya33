## 請以自己的話解釋 API 是什麼
API 是一套規格化後用來交換資料的介面。生產者幫自己要提供的資料分門別類，再將此分類做成規格書（API 文件），想要取資訊的人從此規格書了解有什麼資料可以拿、要怎麼拿。本次作業主要在做的事 Web API 的練習。
## 請找出三個課程沒教的 HTTP status code 並簡單介紹
* 429 Too Many Requests  使用者在給定的時間內傳送了太多的請求。旨在用於網路限速。  
想法：感覺可能會發生在用網站搶演唱會門票的時候！  

* 508 Loop Detected  伺服器在處理請求時陷入無窮迴圈。  
想法：查詢了一下這個代碼，發現使用網站使用超過虛擬主機給的資源時會遇到。不過不太懂為什麼使用超過特定資源就會是無窮迴圈，亂猜會不會是資源用量被當作迴圈終止條件了呢。  

* 408 Request Timeout 請求逾時
想法：有可能是網路問題、瀏覽器問題、當前網站的伺服器問題  
參考資料：[維基百科](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
### TAIPEI DIET
### Authentication
None
### URL  
https://api.taipeidiet.com/restaurants
### EXAMPLE RESPONSE  

``` JS
[
	{
		"id": 1,
		"name": "米樂町",
		"phone": "0999999999"
	},
	{
		"id": 2,
		"name": "肌肉海灘",
		"phone": "0999999991"
	}
]
``` 
### CRUD 
How to create, read, update and delete a restaurant. Suggested method and endpoint are listed below:   

#### Create a restaurant
`POST`  
 
`Endpoint`   https://api.taipeidiet.com/restaurants
#### Read info form a restaurant
`GET` 
 
`Endpoint` https://api.taipeidiet.com/restaurants/:id
#### Update info for a restaurant
`PATCH` 
 
`Endpoint` https://api.taipeidiet.com/restaurants/:id
#### Delete a restaurant
`DELETE` 
 
`Endpoint` https://api.taipeidiet.com/restaurants/:id


