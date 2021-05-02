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
1. 執行第1行，設定變數i是0，檢查i是否<=陣列長度6，繼續執行，進入第一圈迴圈
2. 執行第2行，如果arr[i]，也就是isvalid[0] ，小於等於0(即非正數)，回傳invalid。arr[0]也就是3沒有小於等於0，繼續往下執行....
i變成1開始檢查arr[1]，也就是5...之後遍歷每一個元素檢查是否是負數或0。直到 i++ 變成7，已經大於陣列長度，迴圈終止
3. 執行第3行，設定變數i是2，檢查i是否<=陣列長度6，繼續執行，進入第一圈迴圈
4. 執行第4行，如果arr[2]不等於 arr[1]+arr[0]，回傳invalid。arr[2]=8 arr[1]=5 arr[0]=3 3+5=8，繼續執行，遍歷arr[2]後的每一個數看其是否等於前面兩個元素的值相加，全部都符合
5. 執行第5行，回傳'valid'此函式用來檢視裡面的元素是否都等於前兩個元素相加