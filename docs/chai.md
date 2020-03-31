# Chai

**Chai** 提供 `BDD` / `TDD` 模式的断言库，支持 `Expect` 、`Should` 、`Assert` 三种写法，通常配合 `Mocha` 测试框架使用。

> `expect` 和 `should` 是 `BDD` 风格的，二者使用相同的链式语言来组织断言，  
> 但不同在于他们初始化断言的方式：`expect` 使用构造函数来创建断言对象实例，而 `should` 通过为 `Object.prototype` 新增方法来实现断言（**所以 should 不支持 IE**）；**expect 直接使用 chai.expect，而 should 则需要调用 chai.should()**。

## 参考

- [Chai 官网](https://www.chaijs.com/)
- [Chai API 中文对照](https://www.jianshu.com/p/f200a75a15d2)
- [Chai.js 断言库简单实现](https://segmentfault.com/a/1190000018985747)
