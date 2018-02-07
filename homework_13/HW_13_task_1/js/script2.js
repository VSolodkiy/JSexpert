
// Основное домашнее задание №1

// Начальные переменные
let total = 0,
    result = "";

const element = document.getElementById('result');

(function run () {
    let first,
        second;
    
    let twiceMsg = "Выпал дубль. Число ",
        largeSpreadMsg = "Большой разброс между костями. Разница составляет ",
        winMsg = "Победа, вы набрали очков",
        loseMsg = "Вы проиграли, у вас очков"
        resultMsg = "";
    
    for (let i = 1; i <= 15; i++) {
        if (i === 8 || i === 13) {
            continue;
        }
        first = getRndNumber();
        second = getRndNumber();

    setResult("Первая кость: " + first + " Вторая кость: " + second + "<br>");

    isNumbersEqual(first, second, twiceMsg);
    isBigDifference(first, second, largeSpreadMsg);
    
    setTotalResult(first, second);
    }
    resultMsg = (total >= 100) ? winMsg + " " + total + "<br />": loseMsg + " " + total + "<br />";
    setResult (resultMsg);
    
    printResult();
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
function isNumbersEqual (first, second, twiceMsg) {
    if (first === second) {
        setResult(twiceMsg + first + "<br />");
    }
}
// функция для определения разницы
function isBigDifference (first, second, largeSpreadMsg) {
    if ((first < 3 && second > 4) || (first > 4 && second < 3)) {
        setResult(largeSpreadMsg + Math.abs(second - first) + "<br />");
    } 
}
// функция для вычисления результата total
function setTotalResult (first, second) {
    total += first + second;
}
// функция, которая напечатает полученные с помощью функции setResult данные в HTML
function printResult () {
    element.innerHTML = result;
}