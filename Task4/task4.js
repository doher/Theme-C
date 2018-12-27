function getRandomArray(elementsNumber) {
    let randomArray = [];
    const MIN_VALUE = 0,
        MAX_VALUE = 10;

    for (let i = 0; i < elementsNumber; ++i) {
        randomArray[i] = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE;
    }

    return randomArray;
}

function findSameAdjacentNumbers(array) {
    lengthArray = array.length;

    if (lengthArray < 2) {
        return console.log('В Вашем массиве меньше двух элементов!');
    }

    let pairsNumber = 0;

    for (let i = 0; i < (lengthArray - 1); ++i) {

        if (array[i] === array[i + 1]) {
            pairsNumber++;
        }
    }

    return pairsNumber
}

let randomArray = getRandomArray(20);

console.log(randomArray);
console.log(findSameAdjacentNumbers(randomArray));