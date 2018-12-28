function getMaxNumberArray(array) {
    return Math.max.apply(null, array);
}

function countNumber(array) {
    let maxNumber = getMaxNumberArray(array),
        lengthArray = array.length,
        count = 0;

    for (let i = 0; i < lengthArray; ++i) {
        if (maxNumber < Math.abs(array[i])) {
            count++;
        }
    }

    return count;
}

let array = [1, 3, 5, 1, -3, 6, 3, -1, 3, 6, -7, 2, 1, 0, 5, -10, -7];

console.log(getMaxNumberArray(array));
console.log(countNumber(array));