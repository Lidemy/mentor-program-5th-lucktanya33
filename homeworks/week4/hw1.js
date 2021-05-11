/* eslint-disable-next-line */
const request = require('request')

const originUrl = 'https://lidemy-book-store.herokuapp.com/books?_limit=10'
request(
  originUrl,
  /* eslint-disable-next-line */
  function(error, response, body) { // 不太懂為何要放error和response兩個參數
    const json = JSON.parse(body)// 把body的JSON字串內容轉成javascript的object
    // console.log('body:', body)// 可以印出全部body的內容檢查
    // console.log(json)// 印出轉為物件的body內容
    for (let i = 0; i < json.length; i++) {
      console.log(json[i].id, json[i].name)
    }
  }
)
