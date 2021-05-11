/* eslint-disable-next-line */
const request = require('request')

const process = require('process')

const apiUrl = 'https://restcountries.eu/rest/v2/name/'
const args = process.argv
/* eslint-disable-next-line */
request(apiUrl + args[2], function(error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  const contryData = JSON.parse(body)// console.log(contryData)
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
