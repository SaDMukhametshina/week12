
const button = document.querySelector('#button');

const container = document.querySelector('.container');
const newParagraph = document.createElement('p');
newParagraph.setAttribute('class', 'NewParagraph');
const newParagraph2 = document.createElement('p');
newParagraph2.setAttribute('class', 'NewParagraph2');
const NewPhoto = document.createElement('img');
NewPhoto.setAttribute('class', 'img');


function calculateBMI() {
    const weight = Number(document.querySelector('#input1').value);
    const height = Number(document.querySelector('#input2').value);
    const Bmi = Math.pow(height, 2);
    const Bmi1 = (weight / Bmi) * 10000;
    const Bmi2 = Bmi1.toFixed(1);
    console.log(Bmi1)
    newParagraph.textContent = `Индекс массы тела: ${Bmi2}`;
    if (Bmi2 <= 18.5) {
        newParagraph2.textContent = 'Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.';
        NewPhoto.setAttribute('src', './assets/image/имт1-transformed.png');
    } else if (Bmi2 >= 18.5 && Bmi2 <= 24.9) {
        newParagraph2.textContent = 'Нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.';
        NewPhoto.setAttribute('src', './assets/image/имт2-transformed.png');
    } else if (Bmi2 >= 25.0 && Bmi2 <= 29.9) {
        newParagraph2.textContent = 'Избыточный вес. В этой категории есть некоторый риск развития связанных с ожирением заболеваний.';
        NewPhoto.setAttribute('src', './assets/image/имт3-transformed.png');
    } else if (Bmi2 >= 30.0 && Bmi2 <= 34.9) {
        newParagraph2.textContent = 'Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.';
        NewPhoto.setAttribute('src', './assets/image/имт4-transformed.png');
    } else if (Bmi2 >= 35.0 && Bmi2 <= 39.9) {
        newParagraph2.textContent = 'Ожирение II степени. Риск развития серьезных заболеваний, таких как диабет и сердечно-сосудистые заболевания, очень высок.';
        NewPhoto.setAttribute('src', './assets/image/имт5-transformed.png');
    } else if (Bmi2 >= 40) {
        newParagraph2.textContent = 'Тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.';
        NewPhoto.setAttribute('src', './assets/image/имт6-transformed.png');
    }
    container.append(newParagraph, newParagraph2, NewPhoto);
}

button.addEventListener('click', calculateBMI);