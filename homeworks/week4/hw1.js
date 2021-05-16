/* eslint-disable*/
const request = require('request')
const originUrl = 'https://lidemy-book-store.herokuapp.com/books?_limit=10'
request(
  originUrl,
  function(err, response, body) {// console.log('body:', body) 可以印出全部body的內容看看
    if (err) {//錯誤處理
      console.log('error message:', error)
      return
    }

    let json//原來可以宣告變數不宣告型態
    try {//錯誤處理：回傳資料非json檔的時候
      json = JSON.parse(body)
    } catch(err) {
      console.log('NOT JSON data')
      return
    }
    // const json = JSON.parse(body)// 把body的JSON字串內容轉成javascript的object
    // 疑問之處：參考答案當中不知道為什麼用了try catch處理錯誤後上面這行就不用了
    for (let i = 0; i < json.length; i++) {
      console.log(json[i].id, json[i].name)
    }
  }
)
