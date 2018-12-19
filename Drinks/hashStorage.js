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
        arrayKeys = Object.keys(this);

        return arrayKeys;
    }
}

let drinkStorage = new HashStorage();

function addDrink() {
    let nameDrink = prompt('Название напитка: '),
        isAlcoholic = confirm('Алкогольный он или нет?') ? 'Да' : 'Нет',
        recipeDrink = prompt('Рецепт его приготовления: ');

    drinkStorage.addValue(nameDrink, {
        'name': nameDrink,
        'alcoholic': isAlcoholic,
        'recipe': recipeDrink,
    });
}

function getDrink() {
    let nameDrink = prompt('Название напитка: '),
        msg = drinkStorage.getValue(nameDrink) ? 'Напиток ' + drinkStorage[nameDrink].name + '\n' + 'Алкогольный: ' + drinkStorage[nameDrink].alcoholic + '\n' + 'Рецепт приготовления: ' + drinkStorage[nameDrink].recipe : 'Такой Напиток отсутствует.';

    console.log(msg);
}

function removeDrink() {
    let nameDrink = prompt('Название напитка: ');

    drinkStorage.deleteValue(nameDrink);
}

function getListDrink() {
    console.log('Перечень всех напитков: ' + drinkStorage.getKeys());
}