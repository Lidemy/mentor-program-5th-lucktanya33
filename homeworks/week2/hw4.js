/* eslint-disable */ 
//HW4 印出因數
//版本一 印出因數
function findFactor(n) {
    var divisor = ''
    var answer = []
    for (let i= 1; i <= n; i++) {
        if (n % i === 0) {//如果這個除數可以整除，代表是因數
            divisor = i
            answer.push(divisor)
            //console.log(divisor) 把 divisor 的值放進 result 陣列中
        } 
    }  
    for (let i = 0; i < answer.length; i++){
        console.log(answer[i])
    }
}

findFactor(10);
