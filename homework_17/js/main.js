var btn = document.getElementById("play");
/*Два варианта решения, один с использованием функций main2,js и второй без них main,js, изначально 
подключен main2.jsкакой из них лучше и производительней я даже и не знаю, но думаю, что в варианте 
без функций если убрать все комментарии, то код будет короче. )) */
console.log(data); // Для вывода начального массива
// С помощью функции splice необходимо вырезать 6-й элемент массива.
let cut = data.splice(6, 1);
/* Используйте функцию forEach. Внутри цикла создайте новый массив объектов.
В процессе создания нового массива объектов, избавьтесь от ключа id.*/
let newData = [];
data.forEach((item) => {
    if (item.id) {
        delete item.id;
    }
    newData.push(item);
});
// пройдитесь методом map() 
let transformNewData = newData.map((item) => {
    let httpStr = "http://";
    let threeDots = "...";
    const format = "YYYY/MM/DD HH:mm";
    let whatever = moment(item.date).format(format);
    let string = "=>";
            /* Для поля Name: с помощью функций работы со стрингами делаете первую букву 
            большой, остальные маленькие (ДЖИП -> Джип)*/
        return {name: item.name[0].toUpperCase() + item.name.slice(1).toLowerCase(),
            // Для поля url: добавить перед ним «http://»
                url: httpStr + item.url,
            /* Для поля Description: с помощью функций работы со стрингами делаете 
            обрезание до 15 символов. После добавляем многоточие (…)*/
                description: item.description.substring(0, 15) + threeDots,
            /* Для поля date: создать объект даты из заданных миллисекунд 
            и потом отобразить в виде «2015/07/02 14:15»*/
                date: whatever,
            // Для поля params: из значений ключей сформировать строку типа «true=>80».
                params: item.params.status + string + item.params.progress,
            // Создать новое поле isVisible. Переложить в это поле значение поля params.status.
                isVisible: item.params.status
    }
});
/*После всех преобразований функция map вернет вам новый массив. Теперь с помощью функции 
filter вам необходимо выбрать только те элементы у которых isVisible == true.*/
let sorting = transformNewData.filter(item => item.isVisible === true);

/*Полученный результат печатаем в консоль.
Для печати используем отдельную функцию как 
в прошлых заданиях. То есть вынесете console.log в отдельную функцию.*/
function printResult (print) {
     console.log(print);
};
function transform() {
    data = cut;
    data = newData;
    data = transformNewData;
    data = sorting;
    printResult(data);
};

btn.addEventListener("click", transform);