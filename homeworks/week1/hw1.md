## 交作業流程

# 1. 拿到一個連結

GitHub classroom 連結：[https://classroom.github.com/a/yNNrtNyW](https://classroom.github.com/a/yNNrtNyW)

加入後的樣子

mentor-program-5th-lucktanya33

這是一個你自己的倉庫(repo) 每個人都有的

# 2.  Git clone 複製這個連結同步到自己電腦
`git clone 該repo的連結`


# 3. 確認資料夾裡面已經有 這個資料夾
`ls`

在 finder 裡面也可以看到

# 4. 開一個新的branch(現在是在master上)
`git branch week1`

# 5. 切換到這個 branch
`git checkout week1`

#6.把該好的檔案都加到暫存區
用 `git add --all` 一次把有修改的檔案都加到暫存區
 
# 7. 把檔案 commit到 這個branch上
`git commit -m "finished w1 HW"`

# 8. Push 到遠端
`git push origin week1`

# 9. 在 github 網頁上可以看到新的 branch，發 pull request 表示想要把 branch 合併到master上


# 10. 突然要改動的話怎麼辦？再 commit 並且 push一次

在 github網站上就可以看到兩個 commits

# 11.注意事項：每一次寫作業一定是在一個 新的branch上面

# 12. 作業被改完 (merge 到 master 後) 要在 pull 下來並且刪掉原本的 branch版本，讓本地和遠端保持一致