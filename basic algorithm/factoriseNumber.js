
function factorialize(num) {
  var total = 1;
  for (var i = 1; i < num; i++) {
    total += total * i;
  }
  var result = total;
  return result;
}

factorialize(5);