function bubbleSort(arr) {
	var i = arr.length, j, temp;
	while(i > 0) {
		for (var j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		i--;
	}
	return arr;
}