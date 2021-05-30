## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
`<mark>`  像螢光筆畫線一樣，把底色變成螢光黃mark起來
  
  `<strong>`   代表這一段語意是重要的，標籤內的文字通常默認粗體顯示  
`<map>`  可以把指定範圍變成可點擊的連結，適合拿來製作地圖畫面  
`<output>` 可以做運算並且把 input 的值呈現出 (感覺好像跟JS可以做的事重疊XD~~)

參考資料：  
(1)  HTML tag一覽表 https://www.w3schools.com/tags/  
(2) &lt;map&gt; 使用方式 https://spicyboyd.blogspot.com/2018/06/web-html-map-tag.html

## 請問什麼是盒模型（box modal）
盒模型是用來計算區塊尺寸畫面使用的。  可以以 `box-sizing` 的屬性來做討論
舉例來說，在預設 (default) 的狀態下， `box-sizing: content-box` ，一個有邊框的物件佔掉的空間  = width + border + margin  `可見寬度`   = width+border+padding  
如果我們希望 `可見寬度` 和 width 一樣可以設定為 `box-sizing: border-box` 
 
## 請問 display: inline, block 跟 inline-block 的差別是什麼？  
inline, block, inline-block 指的是每一個元素和其他元素的排列方式，HTML 不同的標籤各有他們的  display 的預設屬性。    

例如標籤 div 預設的是 `block`  ，block 無法與其他人並排，因此若是有兩個 div 元素，會直接折行    

`inline` 屬性可以與他人並排，標籤 span 就是默認 inline 的排列方式。並且不可設定長寬，長寬大小由物件內容撐開  

`nline-block` 指的是物件可以以 block 的方式排在畫面同一列中，並且可以設定長寬


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？  
`static` position 裡面默認的定位方式

`relative` 根據原本自己的基本定位做偏移顯示

`absolute` 根據著父層(上面一層)做偏移顯示，例如 top 40px，即是低於父層的定位高度 40px。會保留父層的佔據空間存在，可以完全重疊，也就是到另外一個圖層去了，因此叫做絕對定位。  
使用規則：父層必須設定為相對定位    

`fixed` 直接將物件定位在另外一個平行時空，不會影響其他內容，瀏覽器捲動時也不會移動，最常見的應用是蓋板廣告  
  
 參考資料：  
 金魚的CSS、https://medium.com/ui-ux%E7%B7%B4%E5%8A%9F%E5%9D%8A/position-%E5%B1%AC%E6%80%A7%E7%9A%84%E5%9F%BA%E7%A4%8E%E6%A6%82%E5%BF%B5-5931254e5203 