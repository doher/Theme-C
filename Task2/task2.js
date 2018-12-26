function getArray(array, number) {
    let arrayNumber = [];

    for (let i = 0; i < array.length; ++i) {
        arrayNumber.push(array[i]);

        let sum = arrayNumber.reduce((a, b) => a + b, 0);

        if (sum === number) {
            return console.log(arrayNumber);
        }
    }

    if (array.length) {
        array.shift();
        return getArray(array, number);
    }

    return console.log('Нет такого подмножества!');
}


var array = [1, 3, 4, 5, 6],
	row  = Math.pow(2, array.length),
	multidimensionalArray = [];

for (var i = row; i < 2 * row; ++i) {
	var tempArray = (i).toString(2).split('').splice(1, (i).toString(2).length);
	
	multidimensionalArray[i - row] = tempArray;
}



let arr = [1, 2, 4, 5, 6, 1, 2, 3, 5, 6, 7, 0, 2, 3];

getArray(arr, 34);