# Unit Testing 单元测试

单元测试（又称为模块测试）是针对 `程序模块` 来进行 `正确性检验` 的测试工作

> 除此外，测试通常分为： 单元测试(Unit Testing) 和 功能测试(Functional Testing)，复杂大型应用可能会有集成测试(Integration Testing) 以及性能测试(Performance Testing)
>
> > 单元测试：关注应用中每个零部件的正常运转，防止后续修改影响之前的组件  
> > 功能测试：确保其整体表现符合预期，关注能否让用户正常使用  
> > 整合测试：确保单独运行正常的零部件整合到一起之后依然能正常运行

### TDD and BDD

- TDD `Test Driven Development`: 测试驱动开发
- BDD `Behavior Driven Development`: 行为驱动开发

从开发模式来区分的话

```
TDD -> 先写测试用例，暂时不考虑优化的前提下，编写符合用例规范的功能实现，在代码编写完成后再进行重构

BDD -> BDD 是以 `TDD` 为基础，通过对行为的描述来确认功能的可用性，一般 BDD 测试用例有 `GWT`的结构，即: `GIVEN` `WHEN` `THEN`，在阅读的时候看起来像是读一篇完整流畅的文档
```

以阶乘函数 factorial 示例：

```js
// TDD
test("equals 1 for sets of zero length", function() {
  assert.equal(1, factorial(0));
});

test("equals 1 for sets of length one", function() {
  assert.equal(1, factorial(1));
});

// BDD
describe("#factorial()", function() {
  it("should return 1 when given 0", function() {
    factorial(0).should.equal(1);
  });

  it("should return 1 when given 1", function() {
    factorial(1).should.equal(1);
  });
});
```

有没有明显的感觉 BDD 格式更符合人类阅读的习惯，但这并不是说 BDD 就优于 TDD，他们在不同的层级上哈。更多查看 [TDD 和 BDD 的区别](https://blog.csdn.net/yhc166188/article/details/102881306)

### 单元测试框架

单元测试应该 `简单` `快速执行` 和 `清晰的错误报告`，因此一个合适的测试框架就尤为重要。

测试框架基本流程包括：

```js
① 描述要测试的代码
② 测试这段代码
③ 判断是否符合预期
```

| 名称                                        | 是否提供测试框架 | 提供断言 | 断言风格   | 展示测试结果 | 快照测试 | 提供仿真 | 覆盖率测试报告 | 推荐 |
| ------------------------------------------- | ---------------- | -------- | ---------- | ------------ | -------- | -------- | -------------- | ---- |
| [QUnit](./docs/qunit.md)                    | √                | √        | C          | √            | X        | X        | X              | ☆    |
| [Jasmine](./docs/jasmine.md)                | √                | √        | Expect     | √            | X        | X        | √              | ☆☆   |
| [Mocha](./docs/mocha.md)                    | √                | X        | -          | √            | X        | X        | X              | ☆☆   |
| [Jest](./docs/jest.md)                      | √                | √        | Expect     | √            | √        | X        | √              | ☆☆☆☆ |
| [Chai](./docs/chai.md)                      | X                | √        | BDD / TDD  | X            | X        | X        | X              | ☆☆   |
| [Expect](./docs/expect.md)                  | X                | √        | Expect     | X            | X        | X        | X              | ☆    |
| [Unexpected](./docs/unexpected.md)          | X                | √        | BDD+Expect | X            | X        | X        | X              | ☆    |
| [Should](./docs/should.md)                  | X                | √        | BDD        | X            | X        | X        | X              | ☆    |
| [Assert](./docs/assert.md)                  | X                | √        | C          | X            | X        | X        | X              | ☆    |
| [Enzyme](./docs/enzyme.md)                  | -                | -        | -          | -            | -        | √        | -              | ☆☆☆☆ |
| [@vue/test-utils](./docs/vue-test-utils.md) | -                | -        | -          | -            | -        | √        | -              | ☆☆☆☆ |
| [Istanbul](./docs/istanbul.md)              | -                | -        | -          | -            | -        | -        | √              | ☆☆☆☆ |

## 参考

- [前端 JS 单元测试框架对比](https://www.cnblogs.com/lihuanqing/p/8533552.html)
- [TDD 和 BDD 的区别](https://blog.csdn.net/yhc166188/article/details/102881306)
