"use strict";

function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
    let colors = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'],
        minValue = 0,
        maxValue = 6,
        colorsHash = {};

    console.log('цветов: ' + colorsCount);

    for (let i = 1; i <= colorsCount; i++) {
        let n = randomDiap(minValue, maxValue),
            colorName = colors[n];

        if (colorName in colorsHash) {
            --i;
            continue;
        }

        colorsHash[colorName] = true;
    }

    for (let prop in colorsHash) {
        console.log(prop);
    }
}

mood(5);