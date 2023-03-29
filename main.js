function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}
function mood(colorsCount) {
    const controle = {};
    let n = 0;
    const colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
    console.log('цветов: ' + colorsCount);
    for (let i = 1; i <= colorsCount; i++) {
        var colorName = '';
        while (true) {
            n = randomDiap(1, 7);
            if (!(n in controle))
                break;
        }
        controle[n] = n;
        colorName += colors[n];
        console.log(colorName);
    }
} mood(3);

