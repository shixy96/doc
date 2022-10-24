# git 代码分仓库并保留 commit

## 代码目录
```
.
├── subProject
├── ...
└── package.json
```

## 分离 
```sh
# 分离原项目目标文件夹到新分支
git subtree split -P [subProject] -b [x-shixy-subtree]
# waiting...
git checkout [x-shixy-subtree]

# github 创建新项目 subProject
git remote add subProject git@github.com:shixy96/subProject.git
git push --set-upstream subProject [x-shixy-subtree]
```
