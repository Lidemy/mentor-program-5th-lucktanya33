/* eslint-disable-next-line */
const request = require('request')

const process = require('process')

const apiUrl = 'https://restcountries.eu/rest/v2/name/'
const args = process.argv
/* eslint-disable-next-line */
request(apiUrl + args[2], function(err, response, body) {
  if (err) { // 錯誤處理
    console.log('error message:', err)
    return
  }
  let contryData
  try { // 錯誤處理：回傳資料非json檔的時候
    contryData = JSON.parse(body)
  } catch (err) {
    console.log('NOT JSON data')
    return
  }

  console.log('============')
  console.log('國家', contryData[0].name)
  console.log('首都', contryData[0].capital)
  const currencyInfo = contryData[0].currencies// [ { code: 'CNY', name: 'Chinese yuan', symbol: '¥' } ]
  // console.log(contryData[0].currencies)
  // console.log(typeof(contryData[0].currencies)) 結果是string
  // console.log(typeof(currencyInfo)) 結果是object 這邊不太懂為什麼賦值後型態改變了@_@"
  console.log('貨幣', currencyInfo[0].code)
  console.log('國碼', contryData[0].callingCodes[0])
}
)
