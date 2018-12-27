function getMask(array) {
    let lengthArray = array.length,
        row = Math.pow(2, lengthArray),
        maskArray = [];

    for (let i = row; i < 2 * row; ++i) {
        let tempArray = (i).toString(2).split('').splice(1, lengthArray);

        maskArray[i - row] = tempArray;
    }

    let lengthMaskArray = maskArray.length;

    for (let i = 0; i < lengthMaskArray; ++i) {
        let tempArray = [];

        for (let j = 0; j < lengthArray; ++j) {

            tempArray[j] = (+maskArray[i][j] === 0) ? 0 : array[j];
        }

        maskArray[i] = tempArray;
    }

    return maskArray;
}

function getSubset(array, number) {

    let maskArray = getMask(array),
        lengthMaskArray = maskArray.length;

    for (let i = 1; i < lengthMaskArray; ++i) {
        let sum = maskArray[i].reduce((a, b) => a + b, 0);

        if (sum === number) {
            let subset = [],
                k = 0;

            for (let j = 0; j < maskArray[i].length; ++j) {
                if (maskArray[i][j] !== 0) {
                    subset[k] = maskArray[i][j];
                    ++k;
                }
            }

            return subset;
        }
    }

    return console.log('Нет такого подмножества!');
}

let array = [1, 2, 4, 5, 6, 1, 2, 3, 5, 6, 7, 0, 2, 3],
    subset = getSubset(array, 45);

console.log(subset);
console.log(subset.reduce((a, b) => a + b, 0));