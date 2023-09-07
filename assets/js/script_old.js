document.addEventListener('DOMContentLoaded', function() {
    var calcularBtn = document.getElementById('calculate_button');
    calcularBtn.addEventListener('click', calcularIMC);

    function calcularIMC() {
        var peso = parseFloat(document.getElementById('peso').value);
        var altura = parseFloat(document.getElementById('altura').value);

        if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
            var imc = peso / (altura * altura);
            var classificacao = "";

            if (imc < 18.5) {
                classificacao = "Magreza";
            } else if (imc >= 18.5 && imc < 25) {
                classificacao = "Normal";
            } else if (imc >= 25 && imc < 30) {
                classificacao = "Sobrepeso";
            } else {
                classificacao = "Obesidade";
            }

            document.getElementById('resultado').innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br>Classificação: ' + classificacao;
        } else {
            document.getElementById('resultado').innerHTML = 'Por favor, insira valores válidos.';
        }
    }
});