const { sum } = require("../src/sum");

test("adds two numbers correctly", () => {
  expect(sum(2, 3)).toBe(5);
});
