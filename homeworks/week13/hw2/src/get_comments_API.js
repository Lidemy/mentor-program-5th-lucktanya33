/* eslint-disable import/prefer-default-export */
/* eslint-disable-next-line */
import $ from 'jquery'// Unable to resolve path to module 'jquery'  import/no-unresolved

// --函式--呼叫API拿資料
export function getCommentsAPI(apiURL, lastID, loadData) {
  let url = `${apiURL}/api_comments.php`
  if (lastID) {
    url += `?before=${lastID}`
  }
  $.ajax({
    url
  }).done((data) => {
    loadData(data)
  }).fail(() => {
    alert('error')
  })
}
