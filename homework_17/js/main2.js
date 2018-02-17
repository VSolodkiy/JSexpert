var btn = document.getElementById("play");
/*Два варианта решения, один с использованием функций main2,js и второй без них main,js, изначально 
подключен main2.jsкакой из них лучше и производительней я даже и не знаю, но думаю, что в варианте 
без функций если убрать все комментарии, то код будет короче. )) */
console.log(data); // Для вывода начального массива
// С помощью функции splice необходимо вырезать 6-й элемент массива.
function cut (data) {
        data.splice(6, 1);
    return data;
};
/* Используйте функцию forEach. Внутри цикла создайте новый массив объектов.
В процессе создания нового массива объектов, избавьтесь от ключа id.*/
function newDataObj (data){
/*Тут у меня вопрос, Александр, обязательно ли использовать let newData = []; при формировании нового 
массива, ведь фактически мы преобразовываем массив data и во все функции я передавал массив data, 
в этом моменте не могу понять связь?*/
    let newData = []; 
        data.forEach((item) => {
            if (item.id) {
                delete item.id;
            }
        newData.push(item);
    });
    return newData;
};
// пройдитесь методом map() 
function transformNewData (newData) {
    let httpStr = "http://";
    let threeDots = "...";
    const format = "YYYY/MM/DD HH:mm";
    let whatever = moment(newData.date).format(format);
    let string = "=>";
    return newData.map((item) => {
        return {
            name: item.name[0].toUpperCase() + item.name.slice(1).toLowerCase(),
            url: httpStr + item.url,
            description: item.description.substring(0, 15) + threeDots,
            date: whatever,
            params: item.params.status + string + item.params.progress,
            isVisible: item.params.status
        }
    });
};
/*После всех преобразований функция map вернет вам новый массив. Теперь с помощью функции 
filter вам необходимо выбрать только те элементы у которых isVisible == true.*/
function sorting (newData) {
    return newData.filter(item => item.isVisible === true);
};
/*Полученный результат печатаем в консоль.
Для печати используем отдельную функцию как 
в прошлых заданиях. То есть вынесете console.log в отдельную функцию.*/
function printResult (print) {
    console.log(print);
};
function transform () {
    data = cut(data);
    data = newDataObj(data);
    data = transformNewData(data);
    data = sorting(data);
    printResult(data);
}; // и еще вопрос, всегда ли нужно ставить ; вот в таких местах?

btn.addEventListener("click", transform);