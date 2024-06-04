一个webpack TypeScript React 项目，使用 TypeScript 配置 webpack 的目录结构可以如下所示：

```
/project-root
├── /node_modules
├── /public
│   ├── index.html
│   └── favicon.ico
├── /src
│   ├── /assets
│   ├── /components
│   ├── /containers
│   ├── /hooks
│   ├── /services
│   ├── /styles
│   ├── /utils
│   ├── App.tsx
│   ├── index.tsx
│   └── react-app-env.d.ts
├── /config
│   ├── webpack.common.ts
│   ├── webpack.dev.ts
│   └── webpack.prod.ts
├── tsconfig.json
├── package.json
├── .babelrc
├── .eslintrc.js
├── .prettierrc
└── README.md
```

### 目录结构说明：

- `/node_modules`: 包含所有项目依赖的 Node 模块。
- `/public`: 存放静态文件如 `index.html`、`favicon.ico` 等。
- `/src`: 项目的源代码目录。
  - `/assets`: 存放图片、字体等静态资源。
  - `/components`: 复用的组件。
  - `/containers`: 页面级别的组件或容器。
  - `/hooks`: 自定义 React Hooks。
  - `/services`: 与 API 交互的服务。
  - `/styles`: 样式文件（可以使用 SCSS、CSS、或 styled-components）。
  - `/utils`: 工具函数。
  - `App.tsx`: 根组件。
  - `index.tsx`: 应用程序的入口文件。
  - `react-app-env.d.ts`: 为 Create React App 使用的自定义环境变量类型声明文件。
- `/config`: webpack 配置文件目录。
  - `webpack.common.ts`: 通用的 webpack 配置。
  - `webpack.dev.ts`: 开发环境的 webpack 配置。
  - `webpack.prod.ts`: 生产环境的 webpack 配置。
- `tsconfig.json`: TypeScript 配置文件。
- `package.json`: 项目的依赖项和脚本。
- `.babelrc`: Babel 配置文件。
- `.eslintrc.js`: ESLint 配置文件。
- `.prettierrc`: Prettier 配置文件。
- `README.md`: 项目说明文件。

这种结构确保了项目的组织良好，方便开发、维护和扩展。