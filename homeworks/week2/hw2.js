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

let str = ''
function capitalize(str) {
  let arr = str.split('')
  let result = '' //console.log(arr)
  let aCode = str.charCodeAt(0)

	if (aCode >= 97 && aCode <= 122) {
    let lettersFollowed = ''//首字後面的字
    for (let i = 1; i < arr.length; i++) {
		lettersFollowed += arr[i]//console.log(lettersFollowed)
    }
    let s1 = str[0].toUpperCase()
    result = s1.toUpperCase() + lettersFollowed
    } 
	else {
		result = str
		}
return result
}

console.log(capitalize('!Tanya'))