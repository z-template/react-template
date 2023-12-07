# 基于Vite + React + @generouted/react-router 构建

- antd + zustand + ahooks
- @generouted/react-router文件式路由
- eslint + prettier + commitLint(eslint.config.js扁平化配置)
- 封装SvgIcon 组件<code>&lt;SvgIcon type=&apos;xxx&apos; /&gt;</code>，支持自定义颜色，大小等
* unocss 样式工具
- ErrorBoundary + Loading 统一封装


## [@generouted/react-router](https://github.com/oedotme/generouted) Features  文件路由实例说明 

```
// pages
|-- pages
|   |-- (main)              // 默认layout布局下所有模块
|   |-- |--_layout.tsx          // 默认layout布局
|   |-- |-- index.tsx      // 默认index(welcome)页
|   |-- |-- posts
|   |-- |-- |-- index.tsx  // 文章列表首页
|   |-- |-- |-- [id].tsx   // 文章详情
|   |-- (auth)              // 登录权限相关页面
|   |-- |-- login.tsx      // 默认login页
|   |-- |-- register.tsx      // 默认注册页
|   |-- _app.tsx     // 全局跟节点
|   |-- 404.tsx     // 全局404
```

## commit规范

    示例: `git commit -m "feat(home): 添加导航栏"`

1. type（必须） : commit 的类别，只允许使用下面几个标识：
```
  'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
  'feat', // 新功能（feature）
  'fix', // 修补bug
  'docs', // 文档（documentation）
  'style', // 格式（不影响代码运行的变动）
  'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
  'test', // 增加测试
  'chore', // 构建过程或辅助工具的变动
  'build', // 改变了build工具 如 grunt换成了 npm'
  'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
  'merge' // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
```
2. scope（必须） : 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

3. subject（必须） : commit 的简短描述，不超过50个字符。
