var assert = require("assert");
describe("Array", function() {
  it("should return -1 when the value is not present", function() {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
});

describe.only("Hooks", function() {
  var count = 0;

  beforeEach(function() {
    count = 2;
  });

  describe("counts", function() {
    function setCount(num) {
      count = num;
    }
    it("count should be 2", function() {
      assert.equal(count, 2);
    });

    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
