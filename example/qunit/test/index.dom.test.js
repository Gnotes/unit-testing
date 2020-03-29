QUnit.test("1 should equals to string '1'", function(assert) {
  assert.ok(1 == "1", "Passed!");
});

QUnit.test("body should be clicked", function(assert) {
  var done = assert.async();
  var clicked = false;
  document.body.click = function() {
    clicked = true;
    document.body.click = null;
  };
  setTimeout(function() {
    console.log("To click body");
    assert.ok(clicked, "body was clicked");
    done();
  }, 0);

  // document.body.click();
  assert.ok(true, "Called");
});
