# Nginx 命令

```sh
# systemctl 启动
sudo systemctl start nginx
service nginx restart

# 查看配置路径
nginx -t
```

```sh
# 刷新配置 
nginx -s reload
```

## location
`location`是Nginx中的块级指令(block directive)，location指令的功能是用来匹配不同的url请求，进而对请求做不同的处理和响应。

location有两种匹配规则：

- 匹配URL类型，有四种参数可选，当然也可以不带参数。
`location [ = | ~ | ~* | ^~ ] uri { … }`
- 命名location，用@标识，类似于定于goto语句块。
`location @name { … }`

### 参数解释
1. =
完全匹配
```
location = /abc/ {
    ...
}
# http://abc.com/abc [匹配成功]
# http://abc.com/abc/index [匹配失败]
```
2. ~
正则匹配，区分大小写
```
location ~ /Abc/ {
  .....
}
# http://abc.com/Abc/ [匹配成功]
# http://abc.com/abc/ [匹配失败]
```
3. ~*
正则匹配，忽略大小写
```
location ~* /Abc/ {
  .....
}
# http://abc.com/Abc/ [匹配成功]
# http://abc.com/abc/ [匹配成功]
```
4. ^~
普通字符串匹配上以后不再进行正则匹配
```
location ^~ /index/ {
  .....
}
#以 /index/ 开头的请求，都会匹配上
# http://abc.com/index/index.page  [匹配成功]
# http://abc.com/error/error.page [匹配失败]
```
5. 不加任何规则时，默认是大小写敏感，前缀匹配，相当于加了“~”与“^~”
```
location /index/ {
  ......
}
# http://abc.com/index  [匹配成功]
# http://abc.com/index/index.page  [匹配成功]
# http://abc.com/test/index  [匹配失败]
# http://abc.com/Index  [匹配失败]
# 匹配到所有uri
```
6. @
nginx内部跳转
### 优先级
> `=` > `^~` > `~` | `~*` > 最长前缀匹配 > `/`

## SSL配置
```nginx
server {
    listen 80;
    server_name ks.shixy.store shixy.store;

    location / {
	    return 301 https://$server_name$request_uri;
    }
}
server {
    listen 443 ssl;
    server_name ks.shixy.store shixy.store;

    ssl_certificate  /etc/nginx/cert/ks.shixy.store.pem;
    ssl_certificate_key /etc/nginx/cert/ks.shixy.store.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    client_max_body_size 4G;
    access_log  /var/log/nginx/access.log;

    gzip on;
    gzip_min_length 30720;
    gzip_vary on;
    gzip_types text/plain application/javascript text/css application/xml;

    location / {
        ...
    }
}
```

## 限流配置

```nginx
limit_req_zone $cookie_Id zone=cookie:100m rate=2r/s;
limit_req_zone $remote_addr zone=ipsms:100m rate=60r/m;
limit_req_zone $binary_remote_addr zone=ip_limit_10qpm:100m rate=10r/m;
limit_req_zone $binary_remote_addr zone=ip_limit_1qps:100m rate=1r/s;
limit_req_zone $binary_remote_addr zone=ip_limit_10qps:100m rate=10r/s;
limit_req_zone $uri zone=uri_limit_5qps:100m rate=5r/s;
limit_req_zone $uri zone=uri_limit_10qps:100m rate=10r/s;
limit_req_zone $uri zone=uri_limit_30qps:100m rate=30r/s;
limit_req_zone $uri zone=uri_limit_50qps:100m rate=50r/s;
limit_req_zone $uri zone=uri_limit_60qps:100m rate=60r/s;
limit_req_zone $uri zone=uri_limit_80qps:100m rate=80r/s;
limit_req_zone $uri zone=uri_limit_100qps:100m rate=100r/s;
limit_req_zone $uri zone=uri_limit_140qps:100m rate=140r/s;
limit_req_zone $uri zone=uri_limit_180qps:100m rate=180r/s;

location /api/login {
  limit_req zone=uri_limit_60qps burst=3 nodelay;

  proxy_set_header X-Forwarded-For $http_x_forwarded_for;
  proxy_set_header X-Real_IP  $remote_addr;
  proxy_set_header Host $http_host;
  proxy_set_header trace-id $request_id;
  proxy_redirect off;
  proxy_pass http://api/;
}
```
