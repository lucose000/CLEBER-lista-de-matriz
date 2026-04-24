function iniciarSistema() {
    let cinema = [];

    // Criando matriz 5x5 com "Livre"
    for (let i = 0; i < 5; i++) {
        cinema[i] = [];

        for (let j = 0; j < 5; j++) {
            cinema[i][j] = "Livre";
        }
    }

    while (true) {
        let linha = Number(prompt("Digite a linha (0 a 4) ou número negativo para sair:"));
        
        if (linha < 0) break;

        let coluna = Number(prompt("Digite a coluna (0 a 4):"));

        if (cinema[linha][coluna] === "Livre") {
            cinema[linha][coluna] = "Ocupada";
            alert("Poltrona reservada com sucesso ✅");
        } else {
            alert("Poltrona já está ocupada ❌");
        }
    }

    // Mostrar resultado final
    let resultado = "";

    for (let i = 0; i < cinema.length; i++) {
        for (let j = 0; j < cinema[i].length; j++) {
            resultado += cinema[i][j] === "Livre" ? "L " : "O ";
        }
        resultado += "\n";
    }

    alert("Mapa final do cinema:\n\n" + resultado);
}