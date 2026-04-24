function somarLinhas() {
    let matriz = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
    ];

    let resultado = "";

    for (let i = 0; i < matriz.length; i++) {
        let soma = 0;

        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }

        resultado += "Soma da linha " + i + ": " + soma + "\n";
    }

    alert(resultado);
}