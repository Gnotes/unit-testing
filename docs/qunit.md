# QUnit

[QUnit](https://qunitjs.com/) 该框架是由 jQuery 团队的成员所开发，并且是 jQuery 的官方测试套件，常用于测试 JQ 前端前端页面。

### 用法

有两种用法：CLI 和 JS 页面引用

#### CLI

直接使用 `qunit` 这个命令，默认会读取 `test` 目录下的文件并执行，当然也可以指定测试文件

```bash
$ qunit test/*.cli.test.js

TAP version 13
ok 1 1 should equals to string '1'
1..1
# pass 1
# skip 0
# todo 0
# fail 0
```

#### JS 页面引用

① JS CSS 引入

```html
<link rel="stylesheet" href="./node_modules/qunit/qunit/qunit.css" />
<script src="./node_modules/qunit/qunit/qunit.js"></script>
```

② 节点定义，用于渲染测试结果元素

```html
<div id="qunit"></div>
<div id="qunit-fixture"></div>
```

③ 引入测试 JS 文件

```html
<script src="./test/index.dom.test.js"></script>
```

### 注意

- 每一个 `test` 里边都必须返回一个可执行到的 `assert` 断言，用于表示这个测试是正常执行的，通常写 `assert.ok(true)`

## 参考

- [QUnit 官网](https://qunitjs.com/)
- [30 分钟 Qunit 入门教程](https://blog.csdn.net/boycycyzero/article/details/43916727)
