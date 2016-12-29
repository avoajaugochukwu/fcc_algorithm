function mutation(arr) {
	firstElement = arr[0].toLowerCase();
	secondElement = arr[1].toLowerCase();

	console.log(firstElement.indexOf(secondElement, -1));
	for (var i= 0; i < secondElement.length; i++) {
		if (firstElement.indexOf(secondElement[i], -1) !== -1) {
			// console.log("found", secondElement[i]);
		} else {
			// console.log("not found", secondElement[i]);
			return false;
		}
	}

  return true;
}

mutation(["hello", "Helli"]);