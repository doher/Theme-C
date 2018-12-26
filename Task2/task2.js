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

let arr = [1, 2, 4, 5, 6, 1, 2, 3, 5, 6, 7, 0, 2, 3];

getArray(arr, 34);