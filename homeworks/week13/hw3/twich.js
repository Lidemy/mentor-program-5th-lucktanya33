// fetch 串接 twitch API
/* eslint-disable quote-props */
const url = 'https://api.twitch.tv/kraken'
const headers = {
  'Content-Type': 'application/json',
  'Client-ID': '1dfq1cbiejk4ybvv0ndigfphk1voz3', // twitch規定
  'Accept': 'application/vnd.twitchtv.v5+json'// twitch規定 // Unnecessarily quoted property 'Accept' found
}

// 功能1--前五的遊戲放在nav
fetch(`${url}/games/top?limit=5`, {
/* eslint-disable object-shorthand */
  method: 'GET',
  headers: headers
})
  .then((response) => response.json())
  .then((jsonTOP5) => {
    for (let i = 0; i < 5; i++) {
      const ul = document.querySelector('.ul')
      const li = document.createElement('li')
      ul.appendChild(li)
      li.outerHTML = `<li>${jsonTOP5.top[i].game.name}</li>`
    }
  })

// 功能--2 顯示全部遊戲前20名直播畫面
fetch(`${url}/streams/?games`, {
/* eslint-disable object-shorthand */
  method: 'GET',
  headers: headers
})
  .then((response) => response.json())
  .then((json) => {
    for (let i = 0; i <= 19; i++) {
      const bannerData = json.streams[i].channel.profile_banner
      const logoData = json.streams[i].channel.logo
      const descrpData = json.streams[i].channel.status
      const nameData = json.streams[i].channel.name
      const urlData = json.streams[i].channel.url// 拿到直播連結網址
      const top20Template = `<div class="block debug">
      <div class="profile__banner debug">
        <a href="${urlData}" class="profile__banner debug" target="_blank">
          <img src="${bannerData}" alt="Well...shit happens.">
        </a>
      </div>
      <div class="bottom debug">
        <div class="logo debug">
          <img src ="${logoData}" alt="Well...shit happens.">
        </div>
        <div class="info debug">
          <div class="descrp debug">
          ${descrpData}
          </div>
          <div class="name debug">
          ${nameData}
          </div>
        </div>
      </div>
      </div>`
      const main = document.querySelector('.main')// 宣告要改動的地方
      const div = document.createElement('div')// div變數是用dom新增的
      main.appendChild(div)// 在main這個區塊中新增一個div
      div.outerHTML = top20Template
    }
  })

// 功能3 點擊某一個nav的前五名-> 1.h1就換成遊戲名稱 2.主要畫面換該遊戲前20直播畫面
document.addEventListener('DOMContentLoaded', () => {
  // Handler when the DOM is fully loaded
  const ul = document.querySelector('.ul')
  ul.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      const gameName = e.target.innerText
      const encodeGamename = encodeURIComponent(gameName)
      document.querySelector('h1').innerText = gameName
      document.querySelector('.main').innerHTML = ''// 清空main裡面的內容

      fetch(`${url}/streams/?game=${encodeGamename}`, {
        /* eslint-disable object-shorthand */
        method: 'GET',
        headers: headers
      })
        .then((response) => response.json())
        .then((json20streams) => {
          console.log(json20streams)
          for (let i = 0; i <= 19; i++) {
            console.log(json20streams.streams[i].game)
            const bannerData = json20streams.streams[i].channel.profile_banner
            const logoData = json20streams.streams[i].channel.logo
            const descrpData = json20streams.streams[i].channel.status
            const nameData = json20streams.streams[i].channel.name
            const urlData = json20streams.streams[i].channel.url// 拿到直播連結網址
            const main = document.querySelector('.main')// 宣告要改動的地方
            const div = document.createElement('div')// div變數是用dom新增的
            main.appendChild(div)// 在main這個區塊中新增一個div
            div.outerHTML = `<div class="block debug">
            <div class="profile__banner debug">
              <a href="${urlData}" class="profile__banner debug" target="_blank">
                <img src="${bannerData}" alt="哇勒圖片怪怪的">
              </a>
            </div>
            <div class="bottom debug">
              <div class="logo debug">
                <img src ="${logoData}" alt="哇勒圖片怪怪的">
              </div>
              <div class="info debug">
                <div class="descrp debug">
                ${descrpData}
                </div>
                <div class="name debug">
                ${nameData}
                </div>
              </div>
            </div>
          </div>`
          }
        })
    }
  })
})
