/* eslint-disable import/prefer-default-export */
/* eslint-disable-next-line */
import $ from 'jquery'// Unable to resolve path to module 'jquery'  import/no-unresolved
import { loadMoreButtonHTML, formTemplate, css } from './template'
import { addComments } from './add_comments'
import { getCommentsAPI } from './get_comments_API'

let lastID = null
let apiURL = ''
let containerElement = null

// 初始化
export function init(options) {
  apiURL = options.apiURL
  containerElement = $(options.containerSelector)
  // 放html
  containerElement.append(formTemplate)
  // 放css
  const styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  styleElement.appendChild(document.createTextNode(css))
  document.head.appendChild(styleElement)

  // --顯示留言--
  getcomments()// 最一開始的那5則留言

  // --載入更多--
  $('.area_comments').on('click', '.load-more', () => {
    getcomments()
  })

  // --新增留言--
  $('.area_add').submit((e) => {
    e.preventDefault()
    // 拿到使用者輸入的值(from form)
    const usernameValue = $('input[name=username]').val()
    const contentValue = $('textarea[name=content]').val()
    addComments(apiURL, usernameValue, contentValue)
  })
}

// --函式--跳脫字元防XSS
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
// --函式--render留言資料
function appendComments(data) {
  console.log(data)// 在console中印出方便除錯
  for (let i = 0; i < data.comments.length; i++) {
    const commentId = data.comments[i].id
    const commentUsername = data.comments[i].username
    const commentContent = data.comments[i].content
    $('.area_comments').append(`
      <div class="comment debug border border-danger rounded m-3">
      <span class="comment_author p-2 debug" >ID&nbsp${commentId}</span>
      <span class="comment_author p-2 debug" >Username&nbsp${escapeHtml(commentUsername)}</span>
      <p class="comment_content p-2 debug">${escapeHtml(commentContent)}</p>
    </div>
  `)
  }
}

// --函式--拿留言資料
function getcomments() {
  $('.load-more').hide()
  getCommentsAPI(apiURL, lastID, (data) => {
    if (!data.ok) {
      alert(data.message)
      return
    }
    // 成功拿到資料後把資料放到前端
    appendComments(data)
    // 設定lastID
    /* eslint-disable prefer-destructuring */
    // ?待處理?目前用解構語法載入功能會壞掉
    const length = data.comments.length
    if (length < 5) {
      $('.load-more').hide()
    } else {
      lastID = data.comments[length - 1].id // console.log(lastID)
      $('.area_comments').append(loadMoreButtonHTML)
    }
  })
}
