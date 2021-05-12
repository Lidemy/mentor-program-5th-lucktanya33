/* eslint-disable */ 
//HW5 寫出 repeat 和 join函式
//repeat函式
function repeat (str,n) {
    let result = str
    for (let i = 1; i < n; i++) {
         result += str
    }
    return result
}

//join函式
function join(arr, str) {
    let result = []
    let resultStr = ""
    for (let i = 0; i <= (arr.length-1); i++) {
        result.push(arr[i])
        result.push(str) 
    } 
    //console.log(result)
    for (let i = 0; i < result.length-1; i++) {   
        resultStr += result[i]
    }
    return resultStr
}

console.log(join(['a','b'], '!'));
console.log(repeat('a', 5));