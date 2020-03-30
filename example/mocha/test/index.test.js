var assert = require("assert");
describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("Throw errors", function() {
  it("double done", function(done) {
    // Calling `done()` twice is an error
    setImmediate(done);
    setImmediate(done);
  });
});

describe("Hooks", function() {
  var count = 0;

  beforeEach(function(done) {
    count = 2;
    done();
  });

  describe("counts", function() {
    function setCount(num) {
      count = num;
    }
    it("count should be 2", function() {
      // setCount(3);
      assert.equal(count, 2);
    });
  });
});

describe("Promises", function() {
  var count = 0;

  beforeEach(function(done) {
    count = 2;
    done();
  });

  describe("counts", function() {
    it("should complete this test", function() {
      return new Promise(function(resolve) {
        assert.equal(count, 2);
        resolve();
      });
    });
  });
});
