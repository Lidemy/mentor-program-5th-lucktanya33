/* eslint-disable */ 
//HW5 寫出 repeat 和 join函式
//repeat函式
function repeat (str,n){
    var result = str
    for (var i = 1; i<n; i++){
         result += str
    }
    return result
}

//join函式
function join(arrr,str){
    var result = []
    var resultStr = ""
    for(var i = 0; i<= (arrr.length-1); i++){
        result.push(arrr[i])
        result.push(str) 
    } 

    //console.log(result)
    for(i = 0; i<result.length-1; i++){   
        resultStr += result[i]
    }
    return resultStr
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));