function somarMatriz() {
    let matriz = [
        [2, 5, 8],
        [1, 4, 7],
        [3, 6, 9]
    ];

    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }

    alert("A soma de todos os elementos é: " + soma);
}