当你在 webpack-dev-server 中启用 HTTPS 后，如果出现 Nginx 错误页面，可能是因为 Nginx 代理配置没有正确处理 HTTPS 请求。以下是一个详细的步骤来确保你的 Nginx 和 webpack-dev-server 配置正确处理 HTTPS 和 WebSocket：

### 1. Webpack Dev Server 配置

确保你的 webpack-dev-server 启用 HTTPS 并且正确配置 WebSocket：

```javascript
const fs = require('fs');
const path = require('path');

module.exports = {
    // 其他配置...
    devServer: {
        port: 3000,
        allowedHosts: 'all',
        static: {
            directory: path.join(__dirname, '/')
        },
        devMiddleware: {
            publicPath: '/dev'
        },
        client: {
            webSocketURL: {
                protocol: 'wss',
                hostname: 'example.com',
                port: 3000,
                pathname: '/ws',
            },
        },
        https: {
            key: fs.readFileSync('/path/to/your/localhost.key'),
            cert: fs.readFileSync('/path/to/your/localhost.crt'),
        }
    },
};
```

确保提供正确的本地 HTTPS 证书文件路径。

### 2. Nginx 配置

确保你的 Nginx 配置正确处理 HTTPS 和 WebSocket：

```nginx
server {
    listen 443 ssl;
    server_name example.com;

    ssl_certificate /path/to/your/fullchain.pem;
    ssl_certificate_key /path/to/your/privkey.pem;

    location /dev {
        proxy_pass https://localhost:3000; # 注意这里要使用 https
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket specific headers
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}

server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}
```

### 3. 检查 Nginx 错误日志

如果仍然出现错误页面，检查 Nginx 的错误日志来获取更多信息。通常日志文件位于 `/var/log/nginx/error.log`。

通过这些步骤，应该能确保你的 webpack-dev-server 和 Nginx 配置能够正确处理 HTTPS 和 WebSocket 连接。如果你仍然遇到问题，请提供更多的错误日志信息，以便进一步诊断。