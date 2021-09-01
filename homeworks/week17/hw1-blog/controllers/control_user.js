const bcrypt = require('bcrypt')

const saltRounds = 10
const db = require('../models')

const { User } = db
const userController = {
  get: (req, res) => {
  },
  login: (req, res) => {
    res.render('user/login')
  },
  handleLogin: (req, res, next) => {
    const { username, password } = req.body
    // 空值判斷
    if (!username || !password) {
      req.flash('errorMessage', '有未輸入的欄位')
      return res.redirect('back')
    }
    User.findOne({
      where: {
        username
      }
    }).then((user) => {
      if (!user) {
        req.flash('errorMessage', '帳號不存在！')
        return res.redirect('back')
      }
      // 密碼比對
      bcrypt.compare(password, user.password, (error, isSuccess) => {
        if (error || !isSuccess) {
          req.flash('errorMessage', '密碼錯誤')
          return res.redirect('back')
        }
        // 登入成功存session
        req.session.role = user.role
        req.session.username = user.username
        req.session.userId = user.id
        res.redirect('/')
      })
    }).catch((error) => {
      req.flash('errorMessage', error.toString())
      return res.redirect('back')
    })
  },
  handleLogout: (req, res) => {
    req.session.username = null
    req.session.role = null
    res.redirect('/')
  },
  register: (req, res) => {
    res.render('user/register')
  },
  // 功能-註冊
  handleRegister: (req, res, next) => {
    const { username, password, nickname } = req.body
    // 判斷欄位空值
    if (!username || !password || !nickname) {
      req.flash('errorMessage', '有未輸入的欄位')
      return res.redirect('back')
    }
    // 密碼 hash
    bcrypt.hash(password, saltRounds, (error, hash) => {
      if (error) {
        req.flash('errorMessage', error.toString())
        return res.redirect('back')
      }
      // 存進資料庫
      User.create({
        username,
        nickname,
        password: hash
      }).then((user) => {
        // 登入成功
        req.session.username = username
        req.session.userId = user.id
        res.redirect('/')
      }).catch(() => {
        if (error) {
          req.flash('errorMessage', error.toString())
          return res.redirect('back')
        }
      })
    })
  }
}
module.exports = userController
