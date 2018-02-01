// Основное домашнее задание №2

// Начальные переменные
var btn = document.getElementById("play");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

var gamerOne, gamerTwo;

var firstMsg = "Выиграл первый игрок ";
var secondMsg = "Выиграл второй игрок ";

const element = document.getElementById('result');

// функция для получения случайных чисел
function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}
// функция для возврата слов
function getNameById (count) {
    let answer = "";
    switch (count) {
        case 1: 
            answer = "Камень";
            break;
        case 2:
            answer = "Ножницы";
            break;
        case 3:
            answer = "Бумага";
            break;
    }
    return answer;
}
// функция для определения победителя
function determineWinner (one, two) {
    var battle;
    if ((one === 3 && two === 1) || (one === 2 && two === 3) || (one === 1 && two === 2)) {
        battle = 1;
    } else if ((one === 1 && two === 3) || (one === 3 && two === 2) || (one === 2 && two === 1)) {
        battle = 2;
    } else {
        battle = "Draw";
    };
    return battle;
}
// функция для вывода сообщений (что-то не выводит ничего :) так и не понял почему )
function printResult (score) {
    var massege = "";
    if (score === 1) {
        massege = firstMsg + score;
    } else if (score === 2) {
        massege = secondMsg + score;
    } else {
        massege = "Whatever";
    }
    return element.innerHTML = massege;

}
// главная функция
function runGame() {
    gamerOne = getPlayerResult();
    gamerTwo = getPlayerResult();
    
    player1.innerHTML = getNameById(gamerOne);
    player2.innerHTML = getNameById(gamerTwo);
}

btn.addEventListener("click", runGame);