/* eslint-disable */
//好多星星
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function() {
  solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
/* eslint-enable */
function solve(lines) {
  const m = lines[0]
  printStar(m)
}

function printStar(n) {
  let layer = ''
  for (let i = 1; i <= n; i++) {
    layer = multiply(i, '*')// 這一行寫 console.log(multiply(i,'*'))會印出五層5顆星星
    console.log(layer)// 不太了解如果用 return 寫要怎麼寫如果寫 return layer 只會印出1顆*
  }
}

function multiply(n, str) { // 實作字串的repeat功能
  let result = ''
  for (let i = 1; i <= n; i++) {
    result += str
  }
  return result
}
