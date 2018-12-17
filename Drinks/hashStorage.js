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
        let arrayKeys = [];
        // i = 0;

        arrayKeys = Object.keys(this);
        // for (let key in this) {
        //     arrayKeys[i] = key;
        //     i++;
        // }

        return arrayKeys;
    }
}

let drinkStorage = new HashStorage();

function addDrink() {
    let nameDrink = prompt('Название напитка: '),
        isAlcoholic = confirm('Алкогольный он или нет?'),
        recipeDrink = prompt('Рецепт его приготовления: ');

    drinkStorage.addValue(nameDrink, {
        'alcoholic': isAlcoholic,
        'recipe': recipeDrink,
    });
}

function getDrink() {
    let nameDrink = prompt('Название напитка');

    console.log(drinkStorage.getValue(nameDrink));
}

function removeDrink() {
    let nameDrink = prompt('Название напитка');

    drinkStorage.deleteValue(nameDrink);
}

function getListDrink() {
    console.log(drinkStorage.getKeys());
}