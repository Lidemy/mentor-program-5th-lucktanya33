/* eslint-disable */ 
//HW3：反轉字串 給定一個字串，請「印出」反轉之後的樣子（不能使用內建的 reverse 函式）
//reverse('yoyoyo') 正確輸出：oyoyoy

function reverse(str){
    var reverseStr = ''
    for (var i = str.length -1; i>=0; i--){
        reverseStr += str[i]
        //console.log(str[i]) //可看每一次迴圈印出的
    }
    return reverseStr
}
console.log(reverse('hello'));
