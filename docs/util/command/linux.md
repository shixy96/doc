# Linux 命令

## scp
```bash
# 上传本地文件到远程
scp [-i identity_file] -r <source-file> <user-name>@<ip>:<remote-dir>
```

## base64
```bash
# base64
echo -n center_$1 | base64
```

## envsubst
文件模版

```txt
# template.txt
hello, ${DIR} is your directory
```

```bash
# dir.sh
export DIR=$1
envsubst '{{$DIR}}' < ./template.txt > ../conf.d/$2.txt
```

```bash
./dir.sh /Usr/shixy/demo result
# => hello, /Usr/shixy/demo is your directory
```
