/* eslint-disable */ 
//HW2 首字母大寫
//給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。
//capitalize('nick') 正確回傳值：Nick

//charCodeAt用法
/*var a = "azAZ"
var aCode = a.charCodeAt(0) var zCode = a.charCodeAt(1)
var ACode = a.charCodeAt(2) var ZCode = a.charCodeAt(3)
console.log(aCode, zCode, ACode, ZCode)*/
// A~Z 排序在65~90 a~z 排序在97~122

//把字串切成陣列的方法
/*var str0 = "NICK"
var arr = str0.split('')
console.log(arr)*/
//轉大寫的方法
/*console.log('anya'.toUpperCase())*/

var str = ""
function capitalize(str){
    var arr = str.split('')
    var result = "" //console.log(arr)
    var aCode = str.charCodeAt(0)
    if (aCode>=65 && aCode <=90){ 
        result = str
    } else if(aCode>=97 && aCode<=122){
        var s1 = str[0].toUpperCase()
        //var s1 = arr[0] + '' //陣列第一個元素值轉為字串
        var s2 = arr[1] + ''
        var s3 = arr[2] + ''
        var s4 = arr[3] + ''
        result = s1.toUpperCase()+s2+s3+s4
    } else {result = str}
return result
}

console.log(capitalize('nick'))