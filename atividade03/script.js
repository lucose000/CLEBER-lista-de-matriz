function encontrarMaior() {
    let matriz = [
        [12, 7, 9, 3],
        [4, 15, 6, 8],
        [10, 2, 20, 5],
        [1, 11, 14, 13]
    ];

    let maior = matriz[0][0];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
            }
        }
    }

    alert("O maior valor da matriz é: " + maior);
}