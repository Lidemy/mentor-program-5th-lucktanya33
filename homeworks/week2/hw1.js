/* eslint-disable */ 
//HW1
//練習三 寫出一個能印出n個*的函式
function printstar (n){
    var result = ''
    for (var i = 1; i<=n; i++){
         result += '*'
    }
    console.log(result)
}
printstar(2)