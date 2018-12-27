function findSumElements(array) {
    let lengthArray = array.length,
        sumNumbersElmentArray = 0

    for (let i = 0; i < lengthArray; ++i) {
        sumNumbersElmentArray += (array[i] + '').split('').reduce((a, b) => a + +b, 0);        
    }

    return sumNumbersElmentArray;
}

let array = [111, 222, 333, 102, 498, 123];

console.log(findSumElements(array));