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

## 代码分离并保留 commit
```bash
git subtree split -P <name-of-folder> -b <name-of-new-branch>
```
eg.
```
.
├── subProject
├── ...
└── package.json
```
```sh
# 分离原项目目标文件夹到新分支
git subtree split -P [subProject] -b [x-shixy-subtree]
# waiting...
git checkout [x-shixy-subtree]

# github 创建新项目 subProject
git remote add subProject git@github.com:shixy96/subProject.git
git push --set-upstream subProject [x-shixy-subtree]
```