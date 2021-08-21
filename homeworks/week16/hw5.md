## 這週學了一大堆以前搞不懂的東西，你有變得更懂了嗎？請寫下你的心得。

## 教材 1
lidemy.com [JS201] 進階 JavaScript：那些你一直搞不懂的地方
以下心得根據 JS201 課程的順序撰寫，並依據1~10分掌握度評分

### 先從變數開始談起 & 變數的生存範圍：Scope
* 掌握度自評：7 分
這部分會覺得其實好像在前三週就可以看看應該不錯，在前面就有踩到相關的雷 >< 這次算是在複習一次

### 從 Hoisting 理解底層運作機制
* 掌握度自評：7 分
Hoisting 覺得還蠻好玩的，教學影片前面都有小題目很像在解數學題也會很想知道為什麼。這邊也是覺得前面好像也能先學一下的感覺，比較不會踩到一些怪怪的雷 QQ

### 從 Closure 更進一步理解 JS 運作 & 物件導向基礎與 prototype
* 掌握度自評：3 分
看影片大概知道運作的原理，但不太知道要怎麼運用，或是為什麼重要

### 先學完物件導向，學 this 才有意義
* 掌握度自評：5 分
大致上可以推出 this 的值，但一樣不確定為什麼 this 很重要。同時參考這篇文章  [[筆記] 談談 JavaScript 中的 function constructor 和關鍵字 new
](https://pjchender.blogspot.com/2016/06/javascriptfunction-constructornew.html) 發現 this 跟 new 的關係好像也很大，打算之後有遇到再回來看

## 教材 2
[所以說event loop到底是什麼玩意兒？| Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

### event loop
* 掌握度自評：7 分
幫助很大的一個影片，看完可以完整理解 call back function 的運作

## 總體心得
看完這一週之後總體來說更了解 JS 的某些地方，但同時也開了更多坑（不了解的地方像 closure, prototype）
然後自己有覺得一個挺怪的地方是：印出未宣告的變數以及印出宣告未賦值變數

#### 1. 印出未宣告的變數**
``` javascript
console.log(a)
```
會噴 error a is not defined


#### 2. 印出宣告未賦值變數

``` javascript
var a
console.log(a)
```
會印出 undefined

總覺得 **1**的狀況 error : a is not defined 很奇怪，是不是該是 a is not declared **a 沒有被宣告** 比較好。哈，不過這可能就是 JS 的規定 -A-


