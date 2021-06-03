## 什麼是 DOM？
Dom (Document Object Model) 文件物件模型。  
一個以樹狀結構來表示 HTML 文件的模型，每一個標籤就是 JS 上面的節點。透過 JS 控制節點的方式，來更改 HTML 的內容，或是 CSS 樣式

#### 參考資料
The Net Ninja [JavaScript DOM Tutorial #1 - Introduction](https://www.youtube.com/watch?v=FIORjGvT0kk&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&ab_channel=TheNetNinjaTheNetNinja)  

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

#### 原始狀態
假設我們目前有一組 HTML，由父到子分別是 outer, inner 和 box，inner是在 outer 裡面的，box 在 inner 裡面又在 outer 裡面。  
#### 發生了一個事件
現在有一個事件 「點擊 box」發生了，box 是被點擊的 target  
####事件傳遞的順序
事件傳遞的順序為   
`window(瀏覽器) > outer > inner > box` ，這是捕獲階段  
target 產生反應再回傳回 window  `box > inner > outer > window`   是冒泡階段
#### 意義
當我們寫下 

``` javascript
document.querySelector('.box').addEventListener('click', function () {
console.log('You clicked the box!')	
})
```
 代表在 `box > inner` 這個階段加入監聽器  
*補充*  當我們選擇('.box') 這個元素，預設是把監聽器放在冒泡階段，如果要放在捕獲階段，要在 callback function 放上第三個參數 `true`

#### 參考資料
* Lidemy MTR05 Week7 捕獲與冒泡補充

## 什麼是 event delegation，為什麼我們需要它？
把監聽器加在父層，讓它幫下面的元素代理監聽。目的 (1) 可以不過度浪費資源，統一給父層監聽即可 (2) 可以處理動態新增的元素

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
`event.preventDefault()` 阻止預設行為  
阻止這個元素原本的預設行為，例如讓放連結的標籤變得無法點擊，讓 input type = submit 變成無法送出。所以元素要原本就有預設行為才能使用。  

`event.stopPropagation()` 讓事件不會再往後面傳遞

#### 參考資料
* Lidemy [FE102] 前端必備：Javascript
* https://ithelp.ithome.com.tw/articles/10198999  
一點小問題  
以上這篇文章是把 event.stopPropagation 解釋為阻止事件冒泡，不知道這樣會不會不夠精準或是有錯誤呢～看老師的說明 event.stopPropagation 是阻止事件傳遞，因此也可以用在捕獲的傳遞階段































