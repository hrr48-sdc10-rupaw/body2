const assert = require('assert');

describe("jest should work when for testing", function() {
  it("it should pass this test", done => {
      expect(true).toBe(true);
        done();
  });
});