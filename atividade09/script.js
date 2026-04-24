function transporMatriz() {
    let matrizOriginal = [
        [1, 2, 3],
        [4, 5, 6]
    ];

    let matrizTransposta = [];
    let resultadoOriginal = "";
    let resultadoTransposta = "";

    for (let j = 0; j < matrizOriginal[0].length; j++) {
        matrizTransposta[j] = [];

        for (let i = 0; i < matrizOriginal.length; i++) {
            matrizTransposta[j][i] = matrizOriginal[i][j];
        }
    }

    for (let i = 0; i < matrizOriginal.length; i++) {
        resultadoOriginal += matrizOriginal[i].join(" ") + "\n";
    }

    for (let i = 0; i < matrizTransposta.length; i++) {
        resultadoTransposta += matrizTransposta[i].join(" ") + "\n";
    }

    alert(
        "Matriz original 2x3:\n" + resultadoOriginal +
        "\nMatriz transposta 3x2:\n" + resultadoTransposta
    );
}