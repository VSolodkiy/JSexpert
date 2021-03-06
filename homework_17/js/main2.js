'use strict';
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
    return arr.splice(index, 1);
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
    let newData = [],
        newDataTranform = [], // работа над ошибками
        newDataFiltered = []; 
    cutItemFromArray(data, 5);
    getNewDataObj(data, newData);

    newDataTranform = transformNewData(newData);
    newDataFiltered = getFilteredData(newDataTranform);

    printResult(newDataFiltered);
}

btn.addEventListener("click", transform);