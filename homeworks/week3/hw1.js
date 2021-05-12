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
  console.log(printStar(m))
}

function printStar(n) {
  let layer = ''// layer是每一層的字串
  let graph = ''// graph是整個圖案
  for (let i = 1; i < n; i++) { // 先用for回圈印出n-1層，並且每一層都加換行
    layer = multiply(i, '*')
    /* eslint-disable-next-line */
    graph += (layer + '\n')
  }
  graph = graph + multiply(n, '*')// graph===n-1層再加上最後一層
  return graph
}

// console.log(printStar(5))

function multiply(n, str) { // 實作字串的repeat功能
  let result = ''
  for (let i = 1; i <= n; i++) {
    result += str
  }
  return result
}
