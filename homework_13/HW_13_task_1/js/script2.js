
// Основное домашнее задание №1

// Начальные переменные
let total = 0,
    first = getRndNumber(),
    second = getRndNumber(),
    result = "";

const element = document.getElementById('result');

// messages
const boneMsg = "Первая кость: " + first + " Вторая кость: " + second + "<br>"

let twiceMsg = "Выпал дубль. Число ",
    largeSpreadMsg = "Большой разброс между костями. Разница составляет ",
    winMsg = "Победа, вы набрали очков",
    loseMsg = "Вы проиграли, у вас очков";

(function run () {
    for (let i = 1; i <= 15; i++) {
        if (i === 8 || i === 13) {
            continue;
        }
        first = getRndNumber();
        second = getRndNumber();

    setResult(boneMsg);

    isNumbersEqual();
    isBigDifference();
    resultTotal();
    printResult();
    }

}());

// функция для получения случайных чисел
function getRndNumber () {
    return Math.floor((Math.random() * 6) + 1);
}
// функция которая будет склеивать все строки в одну
function setResult (string) {
    result += string;
    return result;
}
//  функция для определения совпадений
function isNumbersEqual () {
    if (first === second) {
        return setResult(twiceMsg + first + "<br />");
    }
}
// функция для определения разницы
function isBigDifference () {
    if ((first < 3 && second > 4) || (first > 4 && second < 3)) {
        return setResult(largeSpreadMsg + Math.abs(second - first) + "<br />");
    } 
}
// функция для вычисления результата total
function resultTotal () {
    total += first + second;
    return setResult((total >= 100) ? winMsg + " " + total + "<br />": loseMsg + " " + total + "<br />");
}
// функция, которая напечатает полученные с помощью функции setResult данные в HTML
function printResult () {
    element.innerHTML = result;
}