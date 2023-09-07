const form = document.getElementById('calculadoraimc_form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');
    value.classList.remove('normal');
    value.classList.remove('attention');
    value.classList.remove('danger');

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        if (bmi < 18.5) {
            description = "Magreza";
            value.classList.add('attention');
        } else if (bmi >= 18.5 && bmi < 25) {
            description = "Normal";
            value.classList.add('normal');
        } else if (bmi >= 25 && bmi < 30) {
            description = "Sobrepeso";
            value.classList.add('attention');
        } else {
            description = "Obesidade";
            value.classList.add('danger');
        }
        value.textContent = bmi.replace('.',',');
        document.getElementById('description').textContent = description;
    }else {
        document.getElementById('description').innerHTML = 'Por favor, insira valores válidos.';
    }
});