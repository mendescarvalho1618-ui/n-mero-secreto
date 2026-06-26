<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Jogo do Número Secreto</title>
</head>
<body>

<h1>Jogo do Número Secreto</h1>

<button onclick="jogar()">Iniciar Jogo</button>

<script>

function jogar() {

    let numeroSecreto = 8; // Número escolhido
    let acertou = false;

    for (let tentativa = 1; tentativa <= 5; tentativa++) {

        let palpite = Number(prompt("Tentativa " + tentativa + " de 5\nDigite um número:"));

        if (palpite == numeroSecreto) {
            alert("🎉 Parabéns! Você acertou o número secreto!");
            acertou = true;
            break;
        }

        if (palpite > numeroSecreto) {
            alert("O número digitado é MAIOR que o número secreto.");
        } else {
            alert("O número digitado é MENOR que o número secreto.");
        }
    }

    if (!acertou) {
        alert("❌ Você perdeu!\nO número secreto era: " + numeroSecreto);
    }

}

</script>

</body>
</html>
