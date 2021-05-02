
/* eslint-disable */
//判斷是不是質數 檢查n 能不能被1~n當中除了1和n以外的數整除，如果不能就是質數
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

//讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

//輸入結束，開始針對 lines 做處理
rl.on('close', function() {
  solve(lines)
})
// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
/* eslint-enable */
function solve(lines) {
  for (let i = 1; i <= (lines[0]); i++) {
    /* eslint-disable-next-line */
    const quanInSeq = Number(lines[0])
    const num = Number(lines[i])
    if (primeInspect(num)) {
      console.log('Prime')
    } else {
      console.log('Composite')
    }
  }
}

function primeInspect(num) {
  if (num === 1) return false
  if (num === 2) return true
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
