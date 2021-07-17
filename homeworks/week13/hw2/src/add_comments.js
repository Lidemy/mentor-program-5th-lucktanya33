/* eslint-disable import/prefer-default-export */
/* eslint-disable-next-line */
import $ from 'jquery'// Unable to resolve path to module 'jquery'  import/no-unresolved

export function addComments(apiURL, usernameValue, contentValue) {
  // 發request--->送出留言給API
  $.ajax({
    method: 'POST',
    url: `${apiURL}/api_add_comments.php`,
    data: {
      username: usernameValue,
      content: contentValue
    }
  })
    .done((data) => { // 送出POST後的處理
      if (!data.ok) { // 錯誤處理(根據api資料結構印出錯誤訊息)
        alert(data.message)
        // return eslint建議關掉
      } else if (data.ok) { // 成功處理
        alert('已成功新增留言')
        setInterval(() => {
          location.reload()
        }, 300)
        console.log(data.message)
      }
    })
}
