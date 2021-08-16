## hw4：What is this?
請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` javascript=
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```
### 問題一 `obj.inner.hello() // ??`
####1.
obj.inner.hello() 等於呼叫 obj 裡面的 inner 裡面的 hello function

#### 2.
```
hello: function() {
      console.log(this.value)
    }
```
hello function 會印出 this.value，這時候要來找 this 是什麼

#### 3. 
this 的值牽涉到怎麼去呼叫 function，這邊 `obj.inner.hello()` this 就是 `obj.inner`，也就是
```
inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
```
#### 4.
console.log(this.vaule) //2 
`obj.inner.hello()` 結果是 2

### 問題二 `obj2.hello() // ??`
因為 obj2 = obj.inner
所以這一題的結果同上題也是 2

### 問題三 `hello() // ??`
這邊呼叫的方式與物件沒有關係，this 的值會是預設的 `global` 或 `window` (視執行環境 runtime 而定，nodejs 會是global 瀏覽器會是 window)  
如果是用嚴格模式的話 this 的值會是 `undefined`
