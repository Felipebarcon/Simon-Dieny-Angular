module.exports = function sum(a, b) {
  if (b > a) {
    throw new Error("Negative number not allowed");
  }
  return a - b;
};
