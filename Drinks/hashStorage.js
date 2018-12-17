'use strict';

class HashStorage {

    addValue(key, value) {
        this[key] = value;
    }

    getValue(key) {
        return this[key];
    }

    deleteValue(key) {
        delete this[key];
    }

    getKeys() {
        let arrayDrinks = [],
            i = 0;
        for (let key in this) {
            arrayDrinks[i] =  key;
            i++;
        }

        return arrayDrinks;
    }
}

let drinkStorage = new HashStorage();

drinkStorage.addValue('key1', 'value1');
drinkStorage.addValue('key2', 'value2');
drinkStorage.addValue('key3', 'value3');
drinkStorage.addValue('key4', 'value4');
drinkStorage.addValue('key5', 'value5');

console.log(drinkStorage);
console.log(drinkStorage.getValue('key1'));

drinkStorage.deleteValue('key2');

console.log(drinkStorage.getKeys());