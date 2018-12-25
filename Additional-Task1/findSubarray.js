'use strict';

function findSubarray(array) {
    let numbers = {},
        repeatedNumbers = [],
        subarray = [],
        lengthArray = array.length,
        lengthRepeatedNumbers,
        maxFrequencyArray = 0,
        firstNumber,
        lastNumber,
        lengthSubarray;

    for (let i = 0; i < lengthArray; ++i) {
        let number = array[i];

        if (!(number in numbers)) {
            numbers[number] = 0;
        }

        numbers[number]++;
    }

    for (let num in numbers) {

        if (maxFrequencyArray < numbers[num]) {
            maxFrequencyArray = numbers[num];
        }
    }

    for (let num in numbers) {

        if (maxFrequencyArray === numbers[num]) {
            repeatedNumbers.push(+num);
        }
    }

    lengthRepeatedNumbers = repeatedNumbers.length;
    firstNumber = array.indexOf(repeatedNumbers[0]);
    lastNumber = array.lastIndexOf(repeatedNumbers[0]);
    subarray = array.slice(firstNumber, lastNumber + 1);
    lengthSubarray = subarray.length;

    for (let i = 1; i < lengthRepeatedNumbers; ++i) {
        firstNumber = array.indexOf(repeatedNumbers[i]);
        lastNumber = array.lastIndexOf(repeatedNumbers[i]);

        let newSubarray = array.slice(firstNumber, lastNumber + 1),
            lengthNewSubarray = newSubarray.length;

        if (lengthSubarray > lengthNewSubarray) {
            lengthSubarray = lengthNewSubarray;
        }
    }

    return lengthSubarray;
}


let testArray = [1, 3, 1, 3, 1, 4, 2, 3, 2, 2];

console.log(findSubarray(testArray));
