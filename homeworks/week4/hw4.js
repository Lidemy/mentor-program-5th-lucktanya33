/* eslint-disable*/
const request = require('request')
const CLIENT_ID = '1dfq1cbiejk4ybvv0ndigfphk1voz3'
const BASE_URL = 'https://api.twitch.tv/kraken/games/top/'

request({
  method: 'GET',
  url: BASE_URL,
  headers: {
    'Client-ID': CLIENT_ID,
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
}, function(err, res, body) {
  if (err) {
    return console.log(err)
  }
  const data = JSON.parse(body)// console.log(data)印出觀察資料的樣子
  for (let i = 0; i <= data.top.length; i++) {
    console.log(data.top[i].viewers, data.top[i].game.name)// 這邊用[i]，印的出正解但會報錯.viewers this property undefined。但用數字就不會不知道為何
  }
})
