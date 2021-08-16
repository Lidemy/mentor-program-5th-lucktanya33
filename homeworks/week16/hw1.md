## hw1：Event Loop
在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` javascript
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
 會輸出 
 
 ``` javascript
 1  
 3  
 5
 2
 4
 ```
 在 javascript 的執行緒裡面，會有一個 `call stack` 所有要執行的東西都會在這邊按造順序堆疊執行，但遇到call back的話，因為要等到滿足某種條件才有辦法執行，call back 的執行項目會被丟到 `task quene 等待區` 裡面。等到call stack 裡面都執行完了 quene  排隊等候的項目才能依序進入 call stack。  
 
 所以本題的執行情況如下  
 
 1. console.log(1) 進入 `call stack`
 2. 第一個 setTimeout() 進入 `task quene`
 3. console.log(3) 進入 `call stack`
 4. 第二個 setTimeout() 進入 `task quene`
 5. console.log(5) 進入 `call stack`
 6. 執行 `call stack` 的東西，印出 1, 3, 5
 7. 第一個 setTimeout() 進入 `call stack`，執行印出 2
 8. 第二個 setTimeout() 進入 `call stack`，執行印出 4
