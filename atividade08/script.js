function verificarVencedor() {
    let tabuleiro = [
        ["X", "X", "X"],
        ["O", "", "O"],
        ["", "O", ""]
    ];

    let vencedor = "";

    for (let i = 0; i < tabuleiro.length; i++) {
        if (
            tabuleiro[i][0] !== "" &&
            tabuleiro[i][0] === tabuleiro[i][1] &&
            tabuleiro[i][1] === tabuleiro[i][2]
        ) {
            vencedor = tabuleiro[i][0];
        }
    }

    if (vencedor !== "") {
        alert("O jogador " + vencedor + " venceu em uma linha!");
    } else {
        alert("Nenhum jogador venceu por linha.");
    }
}