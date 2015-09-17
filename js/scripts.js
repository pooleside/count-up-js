var countDivisor = function(countBy, countTo) {
  var x = countBy;
  var y = countTo;
  var countList = [];

  for (var i = x; i <= y; i = i + x) {
    countList.push(i);
  }
    return countList;
};
