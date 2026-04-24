function mostrarMatriz() {
    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    let resultado = "";

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            resultado += matriz[i][j] + " ";
        }

        resultado += "\n";
    }

    alert("Matriz 3x3:\n\n" + resultado);
}