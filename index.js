function calcular() {
    // Verifica se o input está vazio
    if (document.getElementById('numero').value === '') {
        document.getElementById('resultado').innerHTML = 'O número deve ser informado.';

        // Limpa o array de números somados
        document.getElementById('dialog').setAttribute('data-array', JSON.stringify([]));

        // Esconde o link "Ver Números Somados"
        document.querySelector('a[href="#dialog"]').style.display = 'none';
        return;
    }

    // Obtém o número digitado pelo usuário
    const numero = Number(document.getElementById('numero').value);

    // Verifica se o número é positivo
    if (numero <= 0) {
        document.getElementById('resultado').innerHTML = 'O número deve ser positivo.';

        // Esconde o link "Ver Números Somados"
        document.querySelector('a[href="#dialog"]').style.display = 'none';
        return;
    }

    // Verifica se o número é positivo e menor que 4
    if (numero <= 0 || numero <= 3) {
        var message = 'O número deve ser positivo.';
        if (numero > 0) {
            message =
                'O resultado é 0, porque não há números menores que ' + numero + ' que sejam múltiplos de 3 ou 5.';
        }

        document.getElementById('resultado').innerHTML = message;

        // Esconde o link "Ver Números Somados"
        document.querySelector('a[href="#dialog"]').style.display = 'none';
        return;
    }

    // Inicializa o somatório
    let soma = 0;

    // Inicializa o array de números somados
    const numerosSomados = [];

    // Percorre todos os números inteiros de 1 até o número passado
    for (let i = 1; i < numero; i++) {
        // Verifica se o número é divisível por 3 ou 5
        if (i % 3 === 0 || i % 5 === 0) {
            // Adiciona o número ao somatório
            soma += i;

            // Adiciona o número ao array de números somados
            numerosSomados.push(i);
        }
    }
    // Adiciona o array ao dialog
    document.getElementById('dialog').setAttribute('data-array', JSON.stringify(numerosSomados));

    // Exibe o resultado
    document.getElementById('resultado').innerHTML = 'A soma é ' + soma;

    // Mostra o link
    document.querySelector('a[href="#dialog"]').style.display = 'inline';

    // Limpa o input
    document.getElementById('numero').value = '';
}

// Mostra o dialog com os números somados
function mostrarDialog() {
    // Abre o dialog
    document.getElementById('dialog').show();
    // Fecha o dialog
    document.getElementById('dialog-close-button').addEventListener('click', function () {
        document.getElementById('dialog').close();
    });

    // Obtém o array de números somados
    const numerosSomados = JSON.parse(document.getElementById('dialog').getAttribute('data-array'));

    // Exibe os números somados
    document.getElementById('dialog').querySelector('p').innerHTML =
        'Os números somados são: ' + numerosSomados.join(', ');
}

// Limita a quantidade de números que podem ser digitados no input.
// Isso foi feito para evitar que a aplicação trave, pois um input com muitos números pode consumir muita memória.
function limitarInput(input) {
    if (input.value.length > 6) {
        input.value = input.value.slice(0, 6);
    }
}
