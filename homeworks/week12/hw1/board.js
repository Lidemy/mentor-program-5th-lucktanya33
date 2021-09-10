/* eslint-disable no-undef */ // ?待解決?目前會出現 $is not defined 檢查過此篇文章的1&3問題仍存在 https://stackoverflow.com/questions/2194992/jquery-is-not-defined
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

let lastID = null
const loadMoreButtonHTML = '<button class="load-more btn btn-secondary m-3">載入更多</button>'
let URL = 'http://mentor-program.co/mtr04group1/lucktanya33/week12/hw1/api_comments.php'

// --函式--API拿留言資料
function getcomments() {
  $('.load-more').hide()

  // 發request<---跟API拿資料
  $.ajax({
    method: 'GET',
    url: URL,
    success: (data) => { // while the GET request succeeded you get 'json-form data' within data
    // 成功拿到資料後把資料放到前端
      appendComments(data)

      // 設定lastID
      const { length } = data.comments
      if (length < 5) {
        $('.load-more').hide()
      } else {
        lastID = data.comments[length - 1].id // console.log(lastID)
        URL = `http://mentor-program.co/mtr04group1/lucktanya33/week12/hw1/api_comments.php?before=${lastID}`
        $('.area_comments').append(loadMoreButtonHTML)
      }
    },
    error(request, status, error) {
      console.log(request.responseText)
      alert(request.responseText)
    }
  })
}

$(document).ready(() => {
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
    // 發request--->送出留言給API
    $.ajax({
      method: 'POST',
      url: 'http://mentor-program.co/mtr04group1/lucktanya33/week12/hw1/api_add_comments.php',
      data: {
        username: usernameValue,
        content: contentValue
      }
    })
      .done((data) => { // 送出POST後的處理
        console.log(data)
        if (!data.ok) { // 錯誤處理(根據api資料結構印出錯誤訊息)
          alert(data.message)
        } else if (data.ok) { // 成功處理
          const commentId = data.comments[0].id
          alert('已成功新增留言')
          $('.area_comments').prepend(`
          <div class="comment debug border border-danger rounded m-3">
          <span class="comment_author p-2 debug" >ID&nbsp${commentId}</span>
          <span class="comment_author p-2 debug" >Username&nbsp${usernameValue}</span>
          <p class="comment_content p-2 debug">${contentValue}</p>
          </div>
          `)
          // 清空input
          $('input[name=username]').val('')
          $('textarea[name=content]').val('')
          console.log(data.message)
        }
      })
  })
})
