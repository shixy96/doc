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
```bash
#!/usr/bin/env bash

export PX_PARTNER_ID=$1
export PX_HASH=$(echo -n center_$1 | base64)
export PX_DOMAIN=$2

rm -f ../external_domain.conf.d/$3.conf
rm -f ../external_domain.conf.d/$3-tp.conf

envsubst '{{$PX_DOMAIN $PX_PARTNER_ID $PX_HASH}}' < ./external.conf > ../external_domain.conf.d/$2.conf
envsubst '{{$PX_DOMAIN $PX_PARTNER_ID $PX_HASH}}' < ./external-tp.conf > ../external_domain.conf.d/$2-tp.conf

nginx -s reload
```
```bash
scp -i ~/.ssh/aws -r ec2-user@172.32.16.200:/qingshu/static/pc_peixun/ ./
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
