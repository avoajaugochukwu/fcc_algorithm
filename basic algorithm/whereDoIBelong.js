function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var a;
  var b;
  var newArr = arr.sort(function (a, b) {  return a - b;  });
  console.log(newArr);
  for (var i = 0; i < newArr.length; i++) {
    // check where num belongs
    if (newArr[i] >= num) {
      console.log(i);
      return;
    }
  }

  // if num not in array, return the last index + 1, which is the same as the length
  return newArr.length;
}

// getIndexToIns([10, 20, 30, 40, 50], 30);
// getIndexToIns([10, 20, 30, 40, 50], 29);
getIndexToIns([5, 3, 20, 3], 5);

// getIndexToIns([3, 10, 5], 3);