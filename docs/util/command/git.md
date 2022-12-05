# Git 命令

## 删除分支

### 批量删除本地分支
```bash
# 筛选带 shixy 的本地分支并删除
git branch | grep -e shixy | xargs git branch -D
# 删除不包含 master 的分支
git branch | grep -v master | xargs git branch -D
```

### 批量删除远程分支
```bash
# 删除在远程不存在的本地分支
git fetch -p origin

# 筛选带 shixy 的已合并的远程分支并删除
git branch -r --merged | grep -e shixy | sed 's/origin\///g' | xargs git push origin --delete
```

## 分离分支
### 分离目录到新的分支
```bash
git subtree split -P <name-of-folder> -b <name-of-new-branch>
```
