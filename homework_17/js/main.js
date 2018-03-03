'use strict';
/* В разборе была основная функция function transform, в нее помещали все вызовы функций 
и функцию печати, в разборе вы предложили добавить в нее вот такое let newData = [], 
чтоб не изменять изначальный массив data, Но новый массив newData дальше функции getNewDataObj которая 
перебирала изначальный массив data - forEachем и пушила в новый массив все данный за исключением ключа id.
Но если я добавляю еще пустые массивы, в function transform (main.js2) то код начинает работать не изменяя
изначальный массив data, как вы и говорили, почему не работает просто через один массив let newData = []?
 Изначально подключен скрипт main.js*/
var btn = document.getElementById("play");

function getDescription(str) {
    if (str.length >= 15) {
        return `${str.substring(0,15)}...`;
    }
}
function getHttp(url) {
    return `http://${url}`;
}
function getUp_lowCase(item) {
    return item[0].toUpperCase() + item.slice(1).toLowerCase();
}
function getDate(date) {
    return moment(date).format("YYYY/MM/DD HH:mm");
}
// С помощью функции splice необходимо вырезать 6-й элемент массива.
function cutItemFromArray(arr, index) {
    arr.splice(index, 1);
}
/* Используйте функцию forEach. Внутри цикла создайте новый массив объектов.
В процессе создания нового массива объектов, избавьтесь от ключа id.*/
function getNewDataObj(array, param) {
        array.forEach(item => {
            param.push({
                name: item.name,
                url:  item.url,
                description: item.description,
                date: item.date,
                params: item.params
        });
    });
    return param;
}
// пройдитесь методом map() 
function transformNewData(param) {
    return param.map(item => {
        return {
            name: getUp_lowCase(item.name),
            url: getHttp(item.url),
            description: getDescription(item.description),
            date: getDate(item.date),
            params: `${item.params.status}=>${item.params.progress}`,
            isVisible: item.params.status
        }
    });
}
/*После всех преобразований функция map вернет вам новый массив. Теперь с помощью функции 
filter вам необходимо выбрать только те элементы у которых isVisible == true.*/
function getFilteredData (data) {
    return data.filter(item => item.isVisible === true);
}
/*Полученный результат печатаем в консоль.
Для печати используем отдельную функцию как 
в прошлых заданиях. То есть вынесете console.log в отдельную функцию.*/
function printResult (print) {
    console.log(print);
}
function transform () {
    let newData = []; // работа над ошибками
    console.log(newData);
    cutItemFromArray(data, 5);
    newData = getNewDataObj(data, newData);
    newData = transformNewData(newData);
    newData = getFilteredData(newData);
    printResult(newData);
}

btn.addEventListener("click", transform);