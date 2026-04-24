function multiplicarMatriz() {
    let escalar = Number(prompt("Digite o número multiplicador:"));

    let matriz = [
        [2, 4],
        [6, 8]
    ];

    let novaMatriz = [];
    let resultado = "";

    for (let i = 0; i < matriz.length; i++) {
        novaMatriz[i] = [];

        for (let j = 0; j < matriz[i].length; j++) {
            novaMatriz[i][j] = matriz[i][j] * escalar;
            resultado += novaMatriz[i][j] + " ";
        }

        resultado += "\n";
    }

    alert(
        "Matriz original:\n" +
        matriz[0].join(" ") + "\n" +
        matriz[1].join(" ") +
        "\n\nMultiplicador: " + escalar +
        "\n\nNova matriz:\n" + resultado
    );
}