import Vue from 'vue'
import App from './App.vue'
import './styles/common.scss'
import router from '@/router'
import marked from 'marked'
import './styles/a11y-dark.css'
import '@/styles/bootstrap.min.css'
import '@/styles/bootstrap-icons.css'
import store from '@/store'
import '../mock'
import '@/assets/js/bootstrap.js'
// 创建一个自定义渲染器
const renderer = new marked.Renderer();

// 重写code的渲染方法
renderer.code=function(code,language){
   // 指定代码语言
   const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
   // 返回带有hljs类的代码块
   return `<pre><code class="hljs ${validLanguage}">${hljs.highlight(code, { language: validLanguage, ignoreIllegals: true }).value}</code></pre>`;
}
// 设置marked使用highlight.js
marked.setOptions({
  renderer:renderer,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  });
Vue.prototype.$marked=marked
Vue.use(VueRouter);
new Vue({ render: h => h(App), router,store,mounted(){
  const loader=document.getElementById('loader');
  if(loader){
   loader.parentNode.removeChild(loader); 
  }
}}).$mount('#root');
