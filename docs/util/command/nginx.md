# Nginx 命令

```sh
# systemctl 启动
sudo systemctl start nginx

# 查看配置路径
nginx -t
```

```sh
# 刷新配置 
nginx -s reload
```

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