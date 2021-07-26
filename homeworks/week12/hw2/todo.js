/* eslint-disable no-undef */ // ?待解決?目前會出現 $is not defined 檢查過此篇文章的1&3問題仍存在 https://stackoverflow.com/questions/2194992/jquery-is-not-defined
$(document).ready(() => {
  // 功能：新增
  $('.btn-add').click(() => {
    // 拿到輸入框input的值
    const todoValue = $('.todo-input').val()
    // 空值判斷
    if (todoValue === '') {
      alert('請輸入你還沒做完的事')
      return
    }
    $('.todo-input').val('')// 清空輸入格 設定成val('')
    // 放進下方待辦清單
    $('.todos').append(`<div class="todo m-1">
      <span class="todo-content">${todoValue}</span>
      <button class ="btn-mark btn btn-outline-primary" >標記完成</button>
      <button class ="btn-edit btn btn-outline-primary" >編輯</button>
      <button class ="btn-del btn btn-outline-primary" >刪除</button>
      <input class="edit-input hide" >
      <button class ="btn-editdone hide btn btn-info" >完成</button>
    </div>`)
    $('.todo').each((i, el) => { // ==click [全部] 解決在已完成狀態加新項目會出現在已完成狀態
      $(el).removeClass('hide')
    })
  })

  // 功能：清除已做完
  $('.btn-deleteall').click(() => {
    $('.todo').each((i, el) => {
      if ($(el).hasClass('done')) {
        $(el).remove()
      }
    })
  })

  // 功能：刪除
  $('.todos').on('click', '.btn-del', (e) => { // 用事件代理的方式做
    $(e.target).parent().remove()
  })

  // 功能：編輯
  // 階段1 按下編輯
  $('.todos').on('click', '.btn-edit', (e) => { // 用事件代理的方式做
    // 拿到todo項目資料
    // const todo = $(e.target).prev().prev()
    // const todoContent = $(e.target).prev().prev().text()// 選取同級元素 prev()<<-前一個
    // 顯示編輯框
    $(e.target).next().next().removeClass('hide')
    $(e.target).next().next().next().removeClass('hide')

    // 階段2 按下完成按鈕
    $('.todo').on('click', '.btn-editdone', (e) => {
      // 拿到輸入值
      const newContent = $(e.target).prev().val()
      // 放上編輯後的值
      $(e.target).parent().find('span').text(newContent)
      // 移除編輯框
      $(e.target).addClass('hide')
      $(e.target).prev().addClass('hide')
    })
  })

  // 功能：標記完成
  $('.todos').on('click', '.btn-mark', (e) => { // 用事件代理的方式做
    const theTodo = $(e.target).parent()// 目前點擊的那個todo
    if (theTodo.hasClass('done')) {
      // 判斷目前完成狀態給予標記
      theTodo.removeClass('done')
      $(e.target).text('標記完成')
    } else {
      theTodo.addClass('done')
      $(e.target).text('標記未完成')
    }
  })

  // 功能：篩選
  $('.bottom').on('click', 'button', (e) => {
    console.log($(e.target).attr('data-filter'))// 拿到屬性裡面的值，知道點擊哪個按鈕
    const filter = $(e.target).attr('data-filter')
    // 點了未完成的，要把完成的加上class"hide"
    if (filter === 'undone') { // 未完成
      $('.todo').each((i, el) => {
        if ($(el).hasClass('done')) {
          $(el).addClass('hide')
        } else {
          $(el).removeClass('hide')
        }
      })
    } else if (filter === 'done') { // 已完成
      $('.todo').each((i, el) => {
        if (!$(el).hasClass('done')) {
          $(el).addClass('hide')
        } else {
          $(el).removeClass('hide')
        }
      })
    } else { // 全部
      $('.todo').each((i, el) => {
        $(el).removeClass('hide')
      })
    }
  })
})
