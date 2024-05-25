在 Vue 项目中使用 Webpack 和 CDN 引入第三方库时，如果加载时间较长导致白屏，可以通过添加一个加载动画来改善用户体验。以下是实现此功能的步骤：

### 1. 添加加载动画的 HTML 和 CSS

在 `public/index.html` 文件中添加一个加载动画元素：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue App</title>
  <style>
    /* 加载动画的样式 */
    #loading {
      position: fixed;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      z-index: 9999;
    }
    .spinner {
      border: 16px solid #f3f3f3;
      border-top: 16px solid #3498db;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div id="loading">
    <div class="spinner"></div>
  </div>
  <div id="app"></div>
  <!-- Vue 应用程序的 JS 文件 -->
  <script src="path/to/your/app.js"></script>
</body>
</html>
```

### 2. 在 Vue 项目中移除加载动画

在你的 Vue 应用的主入口文件（例如 `main.js`）中，当 Vue 应用实例挂载到 DOM 上时，移除加载动画：

```javascript
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    // 移除加载动画
    const loader = document.getElementById('loading');
    if (loader) {
      loader.parentNode.removeChild(loader);
    }
  }
}).$mount('#app')
```

### 3. 使用 Vue 的 `beforeMount` 钩子

如果你希望在 Vue 组件完全加载之前显示加载动画，可以在根组件中使用 `beforeMount` 钩子来移除加载动画：

```javascript
<template>
  <div id="app">
    <!-- 你的应用内容 -->
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeMount() {
    const loader = document.getElementById('loading');
    if (loader) {
      loader.parentNode.removeChild(loader);
    }
  }
}
</script>
```

### 4. 确保 CDN 资源的引入顺序

确保你的 CDN 资源在 `public/index.html` 中正确引入，并在 Vue 应用程序的 JavaScript 文件之前加载：

```html
<!-- CDN 资源 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js"></script>
<!-- 你的 Vue 应用程序的 JS 文件 -->
<script src="path/to/your/app.js"></script>
```

通过上述步骤，你可以在 Vue 项目中使用加载动画替代白屏时间，从而提升用户体验。