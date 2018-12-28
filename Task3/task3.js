function transformArray(array) {
    let numbers = {},
        lenghtArray = array.length;

    for (let i = 0; i < lenghtArray; ++i) {
        let num = array[i];

        if (!(num in numbers)) {
            numbers[num] = 0;
        }

        numbers[num]++;
    }

    for (let num in numbers) {
        let value = numbers[num];

        if ((num % 2 === 0) && value > 1) {
            removeElement(array, num, value);
        } else if ((num % 2 !== 0) && value > 2) {
            removeElement(array, num, value);
        }
    }

    return array;
}

function removeElement(array, repeatedElement, duplicateQuantity) {

    for (let i = 0; i < duplicateQuantity; ++i) {
        let firstIndex = array.indexOf(+repeatedElement),
            nextIndex = array.indexOf(+repeatedElement, firstIndex + 1);

        if (nextIndex !== -1) {
            array.splice(nextIndex, 1);
        }
    }
}

let array = [1, 2, 2, 3, 4, 4, 3, 4, 5, 5, 1, 1, 1, 1, 7, 8, 9, 3];

console.log(transformArray(array));