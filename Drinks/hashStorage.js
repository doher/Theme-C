'use strict';

class HashStorage {

    addValue(key, value) {
        this[key] = {value};
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
            arrayDrinks[i] = key;
            i++;
        }

        return arrayDrinks;
    }
}

let drinkStorage = new HashStorage();

function addDrink() {
    let nameDrink = prompt('Название напитка'),
        isAlcoholic = confirm('Алкогольный он или нет'),
        recipeDrink = prompt('Рецепт его приготовления');

    drinkStorage.addValue(nameDrink, recipeDrink);
    drinkStorage.addValue('alcoholic', isAlcoholic);
}

function getDrink() {
    let nameDrink = prompt('Название напитка');

    console.log(drinkStorage.getValue(nameDrink));
}

function removeDrink() {

}

function getListDrink() {

}