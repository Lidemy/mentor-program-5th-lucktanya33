# week13 申論題
###### tags: `mtr05` `前端工具` `webpack` `gulp`

## Webpack 是做什麼用的？可以不用它嗎？
### 簡介
Webpack 是一個 module bundler，可以簡單把它翻譯成，打包模組的打包器，透過這個工具我們可以比較容易地把功能打包給別人在瀏覽器上可以做執行。
### 可以不用他嗎？
#### 在node.js執行
如果`javascript` 沒有要在瀏覽器上面運行，而是在 node.js的方法執行，可以用  `CommonJS`的標準`module.export` 和 `require` 來輸出引用模組
#### 瀏覽器自己的方法
在 ES6 標準化模組出來後，瀏覽器可以使用 `import` 和 `export` 使用模組，但是會有以下問題和注意事項 `1.要在引入標籤加上 type="module"` `2.要用伺服器的方式開檔案` `3.不支援IE` `4.npm相容性問題` 使用上會比較麻煩

### 參考資料
* [[FE201] 前端中階：那些前端會用到的工具們
](https://lidemy.com/courses/390624)
* [webpack 新手教學之淺談模組化與 snowpack
](https://blog.huli.tw/2020/01/21/webpack-newbie-tutorial/)

## gulp 跟 webpack 有什麼不一樣？
### webpack
webpack 是一個模組打包工具，當我們完成一個套件之後，透過webpack打包再丟給別人，讓我們做的套件在瀏覽器可以方便的被引入  
### gulp
gulp 是一個自動化的流程工具，可以幫我們省掉使用工具編譯一些檔案的過程，例如：平成透過 babel 把 es6 語法的 `js` 檔案編譯舊語法的檔案，以及把`.SCSS`編譯成`.CSS`，這時候透過 gulp 設定一系列的工作流程，就不需要每個步驟都在 shell 下指令，設定在 gulp檔案裡面，再下gulp 的指令就可以完成上述本來要分開做的事
### 使用的場景
白話的說，`gulp` 是讓自己方便的工具，重點在於自動化的設定任務； `webpack` 則是讓自己和別人都方便的工具，讓模組可以方便的輸出和引入。


## CSS Selector 權重的計算方式為何？
### 簡介
我們在透過 css 幫html加上樣式的時候會透過很多種方式（選取器 selector）選到我們要改變樣式的地方。例如：選取某一個 `class` 這個 class 的物件都可以套用該樣式的設定，或是選取某一個 `id` 這個 id 的物件都可以套用該樣式的設定。  
問題來了如果有一個`h1`標籤同時有 `class` `id` 屬性，同時我們設定了這三個選取器的樣式，應該要先套用哪一個？ 

### 權重
[W3C 的文件說明](https://www.w3.org/wiki/Css/Training/Priority_level_of_selector)，透過選取器的具體性(selector's specificity) 分成四個層級 a, b, c, d ，再比較 `a b c d` 排列在一起的大小，來決定哪一個樣式應該先被套用
>style attribute = a
number of ID attributes in the selector = b
number of other attributes and pseudo-classes in the selector = c
number of element names and pseudo-elements in the selector = d


`層級 a` 把style屬性寫在html元素裡 
`層級 b` id 
`層級 c` class 
`層級 d` html元素(h1, div, p) 偽類(pseudo-elements)

#### 比較範例
![](https://i.imgur.com/rJTxcez.png)
可以看到只要有更大的層級權重存在，後面的層級就算計入的次數再多也沒有用。  
如範例中，第一個選取器因為 id 被選取，b層級計入為`1`  
第二個選取器選了三個html元素所以d層級總計為`3`
根據abcd層級的排序，第一個選取器的權重 `0100`，第二個選取器`0003` 所以優先套用第一個選取器

### 參考資料
* [W3C Css/Training/Priority level of selector
](https://www.w3.org/wiki/Css/Training/Priority_level_of_selector)
* [前端雜談: CSS 權重(Specificity)](https://zhuanlan.zhihu.com/p/50322177)
* [漫畫圖文強烈推薦收藏好物 – CSS Specificity (CSS 權重一覽)](https://muki.tw/tech/css-specificity-document/)