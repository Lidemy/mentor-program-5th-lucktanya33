/* eslint-disable */  
//判斷回文 舉例來說abbbba 從後面數過去也要是abbbba

//split用法
/*var str = "abbbba"
var arr = str.split("") //中間沒有空格或符號的切分法
console.log(arr)
console.log(arr.length)*/

//試著反轉字串
/*var str1 = "Tanya"
var arr1 = str1.split("") //arr1 = [T,a,n,y,a]
let arr1Rverse = ""
for(i=arr1.length-1; i>=0 ; i--){
    arr1Rverse += arr1[i]
}
console.log(arr1Rverse)*/

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

// 拿到所有資料
/* eslint-enable */
function solve(lines) {
  const inputStr = lines[0]
  let StrRverse = '' // 宣告從後面數過來的變數
  const arr = inputStr.split('')
  for (let i = arr.length - 1; i >= 0; i--) { // 為什麼終止條件是i>=0而不是i<0
    StrRverse += arr[i]
  }
  if (inputStr === StrRverse) {
    console.log('True')
  } else {
    console.log('False')
  }
}
