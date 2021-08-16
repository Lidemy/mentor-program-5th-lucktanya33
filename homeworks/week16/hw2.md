## hw2：Event Loop + Scope
請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```javascript=
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
### 第一個迴圈
這時候 i 是 0
`console.log('i: ' + i)` <font color ="#f00">印出 i:0</font>
`setTimeout(() => {
    console.log(i)
  }, i * 1000)` 把這個 callback function 丟到 `task queue` 裡面等待，0秒後，進入 `call stack` 執行，<font color ="#f00">印出 0</font>

### 第二個迴圈
這時候 i 是 1
`console.log('i: ' + i)` <font color ="#f00">印出 i:1</font>
`setTimeout(() => {
    console.log(i)
  }, i * 1000)` 把這個 callback function 丟到 `task queue` 裡面等待，0秒後，進入 `call stack` 執行，<font color ="#f00">印出 1</font>
  
### 第三個迴圈
這時候 i 是 2
`console.log('i: ' + i)` <font color ="#f00">印出 i:2</font>
`setTimeout(() => {
    console.log(i)
  }, i * 1000)` 把這個 callback function 丟到 `task queue` 裡面等待，0秒後，進入 `call stack` 執行，<font color ="#f00">印出 2</font>
  
### 第四個迴圈
這時候 i 是 3
`console.log('i: ' + i)` <font color ="#f00">印出 i:3</font>
`setTimeout(() => {
    console.log(i)
  }, i * 1000)` 把這個 callback function 丟到 `task queue` 裡面等待，0秒後，進入 `call stack` 執行，<font color ="#f00">印出 3</font>
  
### 第五個迴圈
這時候 i 是 4
`console.log('i: ' + i)` <font color ="#f00">印出 i:3</font>
`setTimeout(() => {
    console.log(i)
  }, i * 1000)` 把這個 callback function 丟到 `task queue` 裡面等待，0秒後，進入 `call stack` 執行，<font color ="#f00">印出 4</font>


答案會輸出
```
i:0
0
i:1
1
i:2
2
i:3
3
i:4
4
```