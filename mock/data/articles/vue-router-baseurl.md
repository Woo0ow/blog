在使用 Vue Router 3 时，配置 `base URL` 和 `history` 模式可以让你的应用在不同的上下文路径下正确工作。以下是详细步骤：

### 1. Vue Router 配置

首先，确保你的 Vue Router 使用了 `history` 模式，并设置了 `base URL`。打开你的 `router.js` 文件并进行如下配置：

```javascript
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL, // 这里的 base 配置为环境变量
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue')
    }
    // 其他路由
  ]
});
```

### 2. 设置环境变量

确保在项目根目录下的 `.env` 文件中设置了 `VUE_APP_BASE_URL` 变量。例如，如果你的应用部署在 `/frontend/` 路径下：

```env
VUE_APP_BASE_URL='/frontend/'
```

这会确保 `process.env.BASE_URL` 在构建时设置为 `/frontend/`。

### 3. 修改 `vue.config.js` 文件

如果你有 `vue.config.js` 文件，确保也配置了 `publicPath`：

```javascript
module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL || '/'
};
```

### 4. Nginx 配置

在 Nginx 中，确保你的配置中正确处理了前端的路径和 Vue Router 的 `history` 模式。假设你的前端文件在 `/path/to/your/frontend` 下：

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name yourdomain.com www.yourdomain.com;

    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384";
  

    location /frontend/ {
        alias /path/to/your/frontend/;
        try_files $uri $uri/ index.html;
    }
}
```

### 总结

1. **Vue Router**: 使用 `history` 模式，并设置 `base URL` 为 `process.env.BASE_URL`。
2. **环境变量**: 在 `.env` 文件中设置 `VUE_APP_BASE_URL`。
3. **Nginx**: 确保 `try_files` 配置正确，以支持 Vue Router 的 `history` 模式。

通过这些配置，你可以确保在不同上下文路径下（如 `/frontend/`）正确部署和访问 Vue 应用。