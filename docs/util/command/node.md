# Node 工具

## npm-check package 升级
[https://www.npmjs.com/package/npm-check](npm-check)
```bash
npm-check -u
```

## nvm 选择 node 版本
[nvm](https://github.com/nvm-sh/nvm)
```bash
nvm ls                ## 查看已安装的所有node版本
nvm install node      ## 安装最新版本
nvm install version   ## 安装指定版本
nvm use version       ## 使用指定版本
nvm current           ## 查看当前版本
```

## nrm 选择仓库
[nrm](https://www.npmjs.com/package/nrm)
```bash
nrm ls
nrm use taobao
```

```bash
pnpm store prune
```

## pnpm 选择版本
[corepack](https://nodejs.org/api/corepack.html)
```bash
corepack prepare pnpm@7.1.9 --activate
```