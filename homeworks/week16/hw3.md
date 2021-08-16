## hw3：Hoisting
請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` javascript =
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```
以作用域的變化，執行順序為以下五個步驟
1. 全域 (call fn)
2. fn function (call f2)
3. fn2 function
4. fn function
5. 全域

### 1. Scope: global
最一開始就是設定 global EC 的 VO
```
global VO {
a : undefined
fn : function
}
```

`var a = 1` 把 global VO 裡面的 a 設定為 1
`fn()` 呼叫fn function

### 2. Scope: fn function
進入到 fn function 裡面
fn function 進行初始化設定
```
fn EC
fn VO {
    a : undefined
    fn2(): function
}
```
`console.log(a)` <font color ="#f00">印出 undefined</font>
`var a = 5` 把 a 賦值為 5
`console.log(a)` <font color ="#f00">印出 5</font>
`a++` a = a+1，把 a 賦值為6
`var a` 宣告a（已經宣告過了所以這一行沒意義）
`fn2()` 呼叫 fn2 function，準備進入 fn2 的 scope

### 3. Scope: fn2 function
進入到 fn2 function 裡面
fn2 function 進行初始化設定
```
fn2 EC
fn2 VO {
    
}
```
備註：裡面沒有宣告變數也沒有呼叫 function，所以初始化設定什麼都沒有 

`console.log(a)` 要印出a，因為fn2，裡面沒有宣告 a 的值，所以往上一層 fn EC scope 去找 a 的值，找到 a 是 6。<font color = "#f00">印出6</font>  
`a = 20` 把 a 賦值為 20，因爲 fn2 function 裡面沒有宣告a，所以 fn2 VO 裡面也沒有 a ，這個賦值將會往上層找，把 fn VO 裡面的 a 變成 20。

`b =100` 把 b 賦值為 100，和上面賦值 a 的狀況一樣，因為 fn2 function 沒有宣告 b，fn2 VO 裡面也沒有 b 。所以往上一層 fn VO 對 b 進行賦值，但 fn VO 裡面也沒有 b 。再往上 global VO 裡面找也沒有 b ，所以直接在 global VO 裡面初始化 b，並且把 b 賦值為 100，等同於在 global **var b = 100**。  

```
global VO {
a : 1
fn : function
b: 100
}
```

（備註與疑問：從這邊的狀況看來，若是內層的 scope 對某個變數做賦值時候，該 scope 沒有宣告過這個變數，就會直接賦值到上一層的 scope。也就是說如果個這 scope 的 VO 沒有初始化(設定)過某一個變數，這個變數就沒辦法在這個 scope 被賦值。）

執行完 fn2 function了，準備回到 fn function

### 4. Scope: fn function
回到 fn function 裡面剛剛呼叫完 fn2 的地方繼續往下執行
`console.log(a)` 剛剛在 fn2 裡面 a 往上賦值為 20，所以這邊 <font color ="#f00">印出20</font>

fn function 執行完畢，回到 global call fn 的地方

### 5. Scope: global
在 fn() 下面繼續執行
`console.log(a)` 印出a，會印出 global VO 裡面的 a，也就是第一行在 global VO 裡面賦值的 1 <font color="#f00">印出1</font>
`a = 10` global VO 的 a 賦值為 10
`console.log(a)` <font color="#f00">印出10</font>
`console.log(b)` 印出b， global  VO 裡面的 b 是在 執行fn2 function 時賦值的 <font color="#f00">印出100</font>

### 答案按順序
```
undefined
5
6
20
1
10
100
```