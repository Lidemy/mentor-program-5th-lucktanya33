/* eslint-disable */
//水仙花數
//例如說 153 是三位數，而 1^3 + 5^3 + 3^3 = 153所以它就是一個水仙花數
//而 1634 是四位數，而 1^4 + 6^4 + 3^4 + 4^4 = 1634所以它也是一個水仙花數
//如何判斷是不是水仙花數
//1. 先判斷x是幾位數，假如是3位數
//2. y= (x/100取整)^3+()^3+()^3
//3. 如果 y  === x ，x就是水仙花數
// 153要如何取到第二位數 153/10 的答案再對10取餘數 m= 153/10 第二位數 = m % 10

//判斷幾位數並回傳(題目到六位)
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
/* eslint-disable */
function solve(lines) {
  // 5 200 => ['5', '200']
  const temp = lines[0].split(' ')// 用空格把lines[0]的5 200，用' '空格切開，切成array
  let from = Number(temp[0])
  let to = Number(temp[1])
  for (let i = from; i<=to; i++) {
    if (isNarcissistic(i)) { //如果輸入的數字i是水仙花數
      console.log(i) //就把i印出來
    }
  }
}

function digitsCount(n) {
    if (n < 10) {
        return 1
    } else if (n < 100) {
        return 2
    } else if (n < 1000) {
        return 3
    } else if (n < 10000) {
        return 4
    } else if (n < 100000) {
        return 5
    } else if (n < 1000000) {
        return 6
    }
}

function isNarcissistic(n) {
    let m = n //把輸入的數字n先賦值到m上面
    let digits = digitsCount(n)//digits是這個n的位數從上面函式回傳
    let sum = 0 //設定總和變數 最後要等於n才會是水仙花數
    while (m != 0) { //意思是m不等於0的時候都會一直執行下去
        let num = m % 10 //num是每一個位數的數字
        sum += Math.pow(num,digits)
        m = Math.floor(m/10)//n如果是1634賦值完會是163
    }
    if (sum === n) {
        return true
    } else {
        return false
    }
}
//console.log(isNarcissistic(1634))
