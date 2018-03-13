'use strict';
moment.locale('ru');
// переменная, до которой даты вести отсчет
let restOfDays = moment([2019, 0, 1]);
// функция даты и отсчета количества оставшихся дней
function date() {
    let elementOne = document.getElementById('date');
    elementOne.innerHTML = `Сегодня: <span>${moment().format(`DD MMMM YYYY`)} года</span>`;

    let elementThree = document.getElementById('rest');
    elementThree.innerHTML = `До 2019 года осталось: <span>${restOfDays.diff(moment(), 'days')} дня</span>`;
}
// функция часов
function clock() {
    let elementTwo = document.getElementById('digital');
    elementTwo.innerHTML = `Текущее время: <span>${moment().format("HH:mm:ss")}</span>`;
    console.log(elementTwo.innerHTML);
}
// функция запуска часов
function clockStart() {
    setInterval(clock, 1000);
    clock();
  }

clockStart();
date();

// let message = "";
// let whatever = restOfDays.diff(moment(), 'days');
// function raven (n) {
//     let MsgOne = "дня",
//         MsgTwo = "дней",
//         MsgThree = "день";

//     if (n % 2 === 0) {
//         message = MsgOne;
//     } else if (n % 1 === 0) {
//         message = MsgTwo;
//     } else {
//         message = MsgThree;
//     }
//     return message;
// }
// console.log(`Осталось ${whatever} ${raven(whatever)}`);