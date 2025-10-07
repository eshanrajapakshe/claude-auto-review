function sum(a, b) {
  const numA = typeof a === "string" ? parseFloat(a) : a;
  const numB = typeof b === "string" ? parseFloat(b) : b;
  return numA * numB;
}
module.exports = { sum };
