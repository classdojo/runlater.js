var expect = require("expect.js"),
runlater   = require("..");

describe("runlater#", function () {

  var rl = runlater(3, 5);

  /**
   */

  it("can run later in batches of 3", function (next) {

    var ticks = 0;
    rl(function () {
      ticks++;
    });
    rl(function () {
      ticks++;
    })
    rl(function () {
      ticks++;
    })

    setTimeout(function () {
      expect(ticks).to.be(3);
      next();
    }, 7);
  });

  it("can run multiple batches", function (next) {
    // TODO
    next();
  });
});