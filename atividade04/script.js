function mostrarDiagonal() {
    let matriz = [
        [5, 2, 9],
        [1, 7, 3],
        [8, 4, 6]
    ];

    let diagonal = [];

    for (let i = 0; i < matriz.length; i++) {
        diagonal.push(matriz[i][i]);
    }

    alert(
        "Matriz:\n" +
        matriz[0].join(" ") + "\n" +
        matriz[1].join(" ") + "\n" +
        matriz[2].join(" ") +
        "\n\nDiagonal principal: " + diagonal.join(", ")
    );
}