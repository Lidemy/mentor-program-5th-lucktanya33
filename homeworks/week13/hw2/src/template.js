export const loadMoreButtonHTML = '<button class="load-more btn btn-secondary m-3">載入更多</button>'
export const formTemplate = `
<div>
  <form class="area_add m-3">
    <div class="form-group">
      <label for="exampleInputEmail1">使用者名稱</label>
      <input name="username"  class="form-control"  aria-describedby="emailHelp" placeholder="">
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">留言內容</label>
      <textarea name="content" class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
    </div>
    <button type="submit" class="btn btn-secondary">新增留言</button>
  </form>
  <div class="area_comments debug">
  </div>
</div>
`
export const css = `.comment{
  background-color: pink;
}
p {
  word-break: break-all;
}
span {
  word-break: break-all;
}
`
