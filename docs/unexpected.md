# Unexpected

> 可扩展的 BDD 风格断言，就是可以自己定义规则

与 其他 BDD 断言区别是，`Unexpected` 采用的 `String` 字符串语法，其他采用的是 `Chain` 链式的语法，如：

```js
// Unexpected
var obj = {};
expect(obj, "to be", obj);
```

```js
// Should
var obj = {};
should(obj).be.equal({});
```

## 参考

- [Unexpected 官网](http://unexpected.js.org/)
