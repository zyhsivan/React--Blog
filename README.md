### 个人博客项目 --- 博客前台展示页面(http://101.132.99.131/)

### 技术简介

- 函数组件：`react hook `
- 状态管理：`redux + @reduxjs/toolkit + redux-thunk`
- 样式处理：`styled-components + normalize.css`
- 数据请求：`axios`
- 路由管理：`react-router + react-router-config`
- 组件库：`ant design`
- 性能优化优化:
  -  单项数据流`immer`
  -  组件全部采用`memo`，部分数据进行`useCallback、useMemo`处理
  -  组件懒加载 



### 项目规范

1.所有的函数式组件，为了避免不必要的渲染，全部使用`memo`进行包裹。

2.组件内部的状态使用`useState`，业务数据全部放在`redux`中管理。

3.统一配置`axios`，由`redux-thunk`进行处理，尽可能精简组件代码。

4.每一个业务组件都有自己独立的slice(reducer)。

5.文件夹、文件名称统一小写、多个单词使用`_`链接。

6.JavaScript变量名采用小驼峰标识，常量全部使用大写字母，组件采用大驼峰。



### 实现功能

- [x] 主页 +  分类页 + 详情页
- [x] 页面响应式
- [x] `markdown` 代码高亮



### 页面介绍

待补充.....

<img src="https://i.bmp.ovh/imgs/2021/12/ddbc505afb1eac1a.png" style="zoom:67%;" />

