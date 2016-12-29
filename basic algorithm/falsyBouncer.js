function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // falseArray = [false, null, 0, "", undefined, NaN];
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
  	if (arr[i]) {
  		// console.log(arr[i]);
  		newArray.push(arr[i]);
  	}
  }
  // console.log(newArray);
  return newArray;
}

bouncer([7, "ate", "", false, 9]);