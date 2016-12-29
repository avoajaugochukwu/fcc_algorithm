
function chunkArrayInGroups(arr, size) {
  
  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
  	if (i % size === 0) {
  		newArray.push(arr.slice(0 + i, size + i));
  		console.log(newArray);
  	}
  	
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);