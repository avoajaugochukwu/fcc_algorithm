function largestOfFour(arr) {

  var maxArray = [];
  for (var i = 0; i < arr.length; i++) {
  	var maxNumber = 0;
  	for (var j = 0; j < arr[i].length; j++) {
  		if (arr[i][j] > maxNumber) {
  			maxNumber = arr[i][j];
  		}
  	}
  	maxArray.push(maxNumber);
  }
  // console.log( maxArray);
  return maxArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
