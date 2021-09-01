const db = require('../models')

const { Article } = db
const { User } = db
const articleController = {
  add: (req, res) => {
    const { userId } = req.session
    const { title } = req.body
    const { content } = req.body
    if (!userId || !content || !title) {
      return res.redirect('/')
    }
    Article.create({
      title,
      content,
      UserId: userId
    }).then(() => {
      res.redirect('/')
    })
  },
  delete: (req, res) => {
    if (req.session.role === 2) { // 管理員
      Article.findOne({
        where: {
          id: req.params.id
        }
      }).then((Article) => Article.destroy()).then(() => {
        res.redirect('/')
      }).catch(() => {
        res.redirect('/')
      })
    } else { // 一般會員
      Article.findOne({
        where: {
          id: req.params.id,
          UserId: req.session.userId
        }
      }).then((Article) => Article.destroy()).then(() => {
        res.redirect('/')
      }).catch(() => {
        res.redirect('/')
      })
    }
  },
  update: (req, res) => {
    Article.findOne({
      include: User,
      where: {
        id: req.params.id
      }
    }).then((Article) => {
      res.render('update.ejs', {
        article: Article
      })
    })
  },
  handleUpdate: (req, res) => {
    if (req.session.role === 2) {
      Article.findOne({
        where: {
          id: req.params.id
        }
      }).then((Article) => Article.update({
        title: req.body.title,
        content: req.body.content
      })).then(() => {
        res.redirect('/')
      }).catch(() => {
        res.redirect('/')
      })
    } else {
      Article.findOne({
        where: {
          id: req.params.id,
          UserId: req.session.userId
        }
      }).then((Article) => Article.update({
        title: req.body.title,
        content: req.body.content
      })).then(() => {
        res.redirect('/')
      }).catch(() => {
        res.redirect('/')
      })
    }
  },
  index: (req, res) => {
    Article.findAll({
      include: User,
      limit: 5
    }).then((Articles) => {
      res.render('index', {
        Articles
      })
    })
  },
  list: (req, res) => {
    Article.findAll({
      include: User
    }).then((Articles) => {
      res.render('list.ejs', {
        Articles
      })
    })
  }
}
module.exports = articleController
