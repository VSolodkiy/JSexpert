'use strict';
moment.locale('ru');
let message = "";
// переменная, до которой даты вести отсчет
let restOfDays = moment([2019, 0, 1]);
let getDays = restOfDays.diff(moment(), 'days');
// функция даты и отсчета количества оставшихся дней
function date() {
    let elementOne = document.getElementById('date');
    elementOne.innerHTML = `Сегодня: <span>${moment().format(`DD MMMM YYYY`)} года</span>`;

    let elementThree = document.getElementById('rest');
    elementThree.innerHTML = `До 2019 года осталось: <span>${getDays} ${declension(getDays)}</span>`;
}
// функция часов
function clock() {
    let elementTwo = document.getElementById('digital');
    elementTwo.innerHTML = `Текущее время: <span>${moment().format("HH:mm:ss")}</span>`;
}
// Функция склонения слова "День"
function declension (n) {
    let numberToStr = "" + n;
    let getResNumber = parseInt(numberToStr.substr(numberToStr.length-1));

    if (getResNumber == 1) {
        message = " день";
    } else if (getResNumber == 2 || getResNumber == 3 || getResNumber == 4) {
        message = " дня";
    } else { 
        message = " дней";
    }
    return message;
}
// функция запуска часов
function clockStart() {
    setInterval(clock, 1000);
    clock();
  }

clockStart();
date();

// if (getResNumber > 4 && getResNumber < 21) {
//     message = " дней"; 
// }