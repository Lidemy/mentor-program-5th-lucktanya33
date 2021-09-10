const express = require('express')
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')

const app = express() // express 引入進來的東西是一個 function，用這個 function 建立一個 app
const port = process.env.PORT || 5001
const userController = require('./controllers/control_user')
const articleController = require('./controllers/control_article')

app.set('view engine', 'ejs')
app.use(flash())

// 使用 middleware: session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false // 使用https連線可改為true
  // eslint-disable-next-line object-curly-newline
  }
}))

// 使用 middleware: body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

function redirectBack(req, res, next) {
  res.redirect('back') // 回上一頁
}

// 把變數放進local裡（全域變數）讓views裡面可以使用 view 可以用任何來自 res.locals 的東西
app.use((req, res, next) => {
  res.locals.role = req.session.role
  res.locals.username = req.session.username // 是否有username判斷是否登入
  res.locals.errorMessage = req.flash('errorMessage')
  next()
})

// 路由
// 首頁
app.get('/', articleController.index)
// 所有文章
app.get('/list', articleController.list)
// 登入頁面
app.get('/login', userController.login)
// 登入驗證
app.post('/login', userController.handleLogin, redirectBack)
// 登出
app.get('/logout', userController.handleLogout)
// 註冊
app.get('/register', userController.register)
app.post('/register', userController.handleRegister, redirectBack)
// 新增文章
app.post('/articles', articleController.add)
// 刪除文章
app.get('/delete_articles/:id', articleController.delete)
// 編輯文章
app.get('/update_articles/:id', articleController.update)
app.post('/update_articles/:id', articleController.handleUpdate)

app.listen(port, () => { // 當 server 跑起來之後要做的事
  console.log(`Example app listening at http://localhost:${port}`)
})
