## 跟你朋友介紹 Git

# Git 的基本概念 & 如何應用？

Git 是一種程式開發當中，協助多人協作中版本控制的工具，幫助我們在比較複雜的功能開發下或多人開發的狀況下，比較不會發生誤刪或是覆蓋的狀況。

# add 是什麼？

`git add code.js`

意思是我要把 code.js 這個檔案，加入版本控制，一但加入後如果 code.js檔案有改動，我們都可以追蹤到 

# commit 是什麼？

commit 是提交這一次的版本的意思，有點像是在這個時間點上提交所有需要的運行檔案，程式碼不斷修改迭代後就會出現不同的 commit

提交 commit 時同時要輸入關於這次 commit 的訊息，例如當我們提交第一個版本，指令如下

`git commit -m "first commit"`

# push 是什麼？pull 是什麼？

push 和 pull 是 Git 內建與遠端程式庫互動的功能

我們可以把 github 想像成 google 雲端硬碟

push 就是把本地端的檔案 上傳到雲端硬碟 (github) 當中

pull 就是把雲端硬碟(github) 上面的檔案下載下來