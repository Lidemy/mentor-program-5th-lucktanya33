/* eslint-disable-next-line */
const request = require('request')// 引入request這個library

const process = require('process')

const apiUrl = 'https://lidemy-book-store.herokuapp.com/books/'
// console.log(process.argv)
const args = process.argv// args就是終端機輸入的陣列 輸入node hw2.js 2 args =[node, hw2.js, 2]
const action = process.argv[2]// process.argv陣列的第三個元素===要對book list做的動作
const actionContent = process.argv[3]// process.argv陣列的第四個元素===book list動作的內容

// STEP1 製作需要的功能 讀取某一id 新增POST、刪除DELETE、修改PATCH
// STEP2 製作 switch case，讓 action 跑進去之後可以選執行的 function

switch (action) {
  case 'list':
    listAllbooks()
    break
  case 'read':
    readOnebook(actionContent)// 以actionContent 為參數呼叫readOnebook函式
    break
  case 'delete':
    deleteOnebook(actionContent)
    break
  case 'create':
    createAbook(actionContent)
    break
  case 'update':
    updateBookinfo(args[3], args[4])
    break
  default:
    console.log('this is default message')
}

// 列出所有的書
function listAllbooks() {
  request(apiUrl, (err, res, body) => {
    if (err) {
      return console.log('列出失敗', err)
    }

    let data// 原來可以宣告變數不宣告型態
    try { // 錯誤處理：回傳資料非json檔的時候
      data = JSON.parse(body)
    } catch (err) {
      console.log('NOT JSON data')
      return
    }
    for (let i = 0; i <= data.length; i++) {
      console.log(data[i].id, data[i].name)
    }
  })
}

// 實作讀取某 id
function readOnebook(actionContent) {
  request(apiUrl + actionContent, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err)
    }
    let data// 原來可以宣告變數不宣告型態
    try { // 錯誤處理：回傳資料非json檔的時候
      data = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }
    console.log(data.name)
    console.log('讀取成功')
  })
}
// 實作刪除某id
function deleteOnebook(actionContent) {
  request.delete(apiUrl + actionContent, (err, res, body) => {
    if (err) {
      return console.log('刪除失敗', err)
    }
    console.log('刪除成功！')
  })
}

// 實作新增POST
function createAbook(actionContent) {
  request.post({
    url: apiUrl,
    form: {
      id: 23,
      name: actionContent
    }
  }, (err, res) => {
    if (err) {
      return console.log('新增失敗', err)
    }
    console.log('新增成功！')
  })
}

// 實作新增更新
function updateBookinfo(id, name) {
  request.patch({
    url: apiUrl + args[3],
    form: {
      name: args[4]
    }
  }, (err, res) => {
    if (err) {
      return console.log('更新失敗', err)
    }
    console.log('更新成功！')
  })
}
