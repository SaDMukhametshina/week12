let text = `у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.`;

let result = text.replace(/;/g, ';\n');

let substring = result.replace(/\s/g, '');

let newText = result.slice(27, 50);

let replacedText = newText.replace('клён', 'дубе');

let replacedText2 = result.toUpperCase();

let replacedText3 = result.replace(/клён/g, 'дуб');

let index = result.indexOf('моря');

let modifiedText = replacedText[0].toUpperCase() + replacedText.slice(1);

console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);


if (BMI2 < 18.5) {
    newParagraph2.textContent = 'Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.'
    NewPhoto.setAttribute('src', './assets/image/имт1-transformed.png');
} else if (BMI2 >= 18.5 && BMI2 <= 24.9) {
    newParagraph2.textContent = 'Нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.';
    NewPhoto.setAttribute('src', './assets/image/имт2-transformed.png');
} else if (BMI2 >= 25.0 && BMI2 <= 29.9) {
    newParagraph2.textContent = 'Избыточный вес. В этой категории есть некоторый риск развития связанных с ожирением заболеваний.';
    NewPhoto.setAttribute('src', './assets/image/имт3-transformed.png');
} else if (BMI2 >= 30.0 && BMI2 <= 34.9) {
    newParagraph2.textContent = 'Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.';
    NewPhoto.setAttribute('src', './assets/image/имт4-transformed.png');
} else if (BMI2 >= 35.0 && BMI2 <= 39.9) {
    newParagraph2.textContent = 'Ожирение II степени. Риск развития серьезных заболеваний, таких как диабет и сердечно-сосудистые заболевания, очень высок.';
    NewPhoto.setAttribute('src', './assets/image/имт5-transformed.png');
} else if (BMI2 > 40) {
    newParagraph2.textContent = 'Тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.';
    NewPhoto.setAttribute('src', './assets/image/имт6-transformed.png');
} else {
    newParagraph2.textContent = '';
}