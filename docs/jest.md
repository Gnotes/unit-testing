# Jest

Jest 是一个 JavaScript 测试框架，简单且功能齐全，集成了 `断言`、`JSDom`、`覆盖率报告` 等测试工具

> 用法和 API 网上一大堆，查看参考文档

### 疑点解析

#### Mock

对于 **Mock** 你可能有些疑惑，到底怎么使用呢！！

##### Mock 是什么

Mock 就是 `假的/模拟` 的意思，可用模拟一个 `模块 module` 或 `函数 function`，可以 **监听(Spy)** 我们的对象，主要有三个作用：`调用监听` `参数监听` `返回值设置`，这三个对应 mock 的一些方法。

- `jest.fn` : 可以用于模拟 `单个函数`(一般是我们不关心内部实现，只想快速模拟的函数)
- `jest.mock` : 用于模拟 `一个模块`，内部实现就是将 `module` 暴露的 `所有导出` 都用 `jest.fn` mock 了
- `jest.spyOn` : 看这个名字你就知道是干啥的啦，监听某个 `对象` 上的 `方法`

推荐看完这篇：[Jest 单元测试入门](https://www.cnblogs.com/SamWeb/p/11454923.html) 博客就萌白啦 🎉

## 参考

- [Jest 中文](https://jestjs.io/zh-Hans/)
- [Jest 单元测试入门](https://www.cnblogs.com/SamWeb/p/11454923.html) 👍
- [手动实现 Mock](https://jestjs.io/docs/zh-Hans/manual-mocks)
- [ES6 Class 的 Mock](https://jestjs.io/docs/zh-Hans/es6-class-mocks)
- [模块 Mock](https://jestjs.io/docs/zh-Hans/bypassing-module-mocks)
