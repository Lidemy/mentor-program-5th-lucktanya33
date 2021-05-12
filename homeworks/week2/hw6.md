``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
**以下之第 1 行以  function isValid 下面的開始的 statement 開始計**

1. 執行第1行，`設定起始值i是0，終止條件 i 小於陣列長度，每一圈+1` 繼續執行，進入大括號中的敘述 

2. 執行第 2 行，如果 arr[i]小於等於0，即非正數，即回傳函式值為  <font color=#0000FF>invalid</font> 。   目前arr[0]也就是3，沒有小於等於0，繼續往下執行....i 變成1開始檢查arr[1]，也就是5...之後遍歷每一個元素檢查是否是負數或 0。直到 i 的最後一個值 5 ，再 +1 時，變成 i = 6 ，觸發終止條件 `i < arr.length` 跳出繼續往下 

3. 執行第 4 行，`設定起始值 i 是 2，i 需要小於 arr.length 陣列長度 ，每一圈+1` 繼續執行，進入第一圈迴圈  

4. 執行第 5 行，如果 arr[2] 不等於 arr[1] + arr[0]，回傳函式值為  <font color=#0000FF>invalid</font>。當 i == 2 時， arr[2]=8，arr[1]=5，arr[0]=3，3+5=8，繼續執行，遍歷 arr[2]後的每一個數看其是否等於前面兩個元素的值相加，直到 i = 5 為止，全部都符合 。

5. 執行第 7 行，回傳函式值 <font color=#0000FF>valid</font>

此函式用來檢視裡面的元素是否都等於前兩個元素相加