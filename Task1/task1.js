'use strict';

function transformArray(array) {
    let zeroArray = [],
        restArray = [],
        lengthArray = array.length;

    for (let i = 0; i < lengthArray; ++i) {

        if (array[i] === 0) {
            zeroArray.push(array[i]);
        } else {
            restArray.push(array[i]);
        }        
    }

    return zeroArray.concat(restArray);
}

let array = [1, 3, false, 0, 'hjh', 2, 1, 0, 1, 23, 5, 0, 0, '13', true];

console.log(transformArray(array));