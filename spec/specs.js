describe('countDivisor', function() {
  it("it counts to a given number 'y' in increments of given number 'x'", function() {
    expect(countDivisor(3, 9)).to.eql([3,6,9]);
  });
});
