function gerarMatriz() {
    let n = Number(prompt("Digite o tamanho da matriz (N x N):"));

    let matriz = [];
    let resultado = "";

    for (let i = 0; i < n; i++) {
        matriz[i] = [];

        for (let j = 0; j < n; j++) {
            if (i === j) {
                matriz[i][j] = 1;
            } else {
                matriz[i][j] = 0;
            }

            resultado += matriz[i][j] + " ";
        }

        resultado += "\n";
    }

    alert("Matriz Identidade:\n\n" + resultado);
}