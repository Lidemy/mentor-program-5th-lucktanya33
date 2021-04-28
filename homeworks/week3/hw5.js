/* eslint-disable */
//聯誼順序比大小
//要用 k 的值來看狀況，
//如果 k ===1 代表數字大獲勝(班長選比大)  B獲勝 代表B>Ａ
//如果 k ===-1 代表數字小的獲勝 A獲勝 代表B<A 
//persuade code
//如果班長選比大(k===1)，大者獲勝，if A>B 輸出A，elif 相等輸出draw，else輸出B
//如果班長選比小(k===-1) ，小者獲勝，if A<B 輸出A，else 輸出B 
//測資A:1 B:2 K:1  //1 2 -1  //2 2 1

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
/* eslint-enable */
// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  const arrLength = Number(lines[0]) // 先取出第一行 Line0
  for (let i = 1; i <= arrLength; i++) {
    const [a, b, k] = lines[i].split(' ') // ['1', '2', '1']把每一行變成一個三個數字的陣列，每次取出
    // console.log([a,b,k]) 檢查測試資料

    if (k === 1) { // k==1 代表班長決定比大
      if (BigInt(a) > BigInt(b)) {
        console.log('A')
      } else if (BigInt(a) === BigInt(b)) {
        console.log('DRAW')
      } else {
        console.log('B')
      }
    } else { // k!==1 代表班長決定比小
      if (BigInt(a) < BigInt(b)) {
        console.log('A')
      } else if (BigInt(a) === BigInt(b)) {
        console.log('DRAW')
      } else {
        console.log('B')
      }
    }
  }
}
