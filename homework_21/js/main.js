(function(){
/* День добрый Александр! Вроде бы задание сделал, но есть моменты до которых не могу додуматься: ))
1. Галереи строятся, но при дальнейшей смены селектбокса галерея не перестраивается, а приплюсовывается, 
не могу понять почему и так на всех типах построения.
2. Последний метод CreateElement, почему-то выстраивает галерею не по горизонтали, а по вертикали да и с 
ошибками.*/
let btn = document.getElementById("play"),
    firstBlock = document.querySelector('#first-line'),
    secondBlock = document.querySelector('#second-line'),
    thirdBlock = document.querySelector('#third-line'),
// селектбоксы
    typeSelector = document.getElementById("type-selector"),
    lineSelector = document.getElementById("line-selector"),
// один из примеров как прятать блоки
    first = document.querySelector('.first-group'),
    second = document.querySelector('.second-group'),
    third = document.querySelector('.third-group');
// Функции преобразования
// Описание
function getDescription(str) {
    if (str.length >= 15) {
        return `${str.substring(0,15)}...`;
    }
}
// url
function getHttp(url) {
    return `http://${url}`;
}
// имя
function getUp_lowCase(item) {
    return item[0].toUpperCase() + item.slice(1).toLowerCase();
}
// дата
function getDate(date) {
    return moment(date).format("YYYY/MM/DD HH:mm");
}
// получение нового массива
function transformNewData(array) {
    return array.map(item => {
        return {
            name: getUp_lowCase(item.name),
            url: getHttp(item.url),
            description: getDescription(item.description),
            date: getDate(item.date),
        }
    });
}
// Функция выбора количества отображений
function makeChoiceLine(array) {
    if (lineSelector.value == 1) {
        array.length = 3;
    } else if (lineSelector.value == 2) {
        array.length = 6;
    } else {
        array.length;
    }
}
// Функция выбора типа
function makeChoiceType(array) {
    if (typeSelector.value == 1) {
        useReplace(array);
    } else if (typeSelector.value == 2) {
        useTemplateString(array);
    } else if (typeSelector.value == 3){
        useCreateElement(array);
    }
}
// Способы отображений
// Метод .replace
function useReplace(array) {
    let replaceItemTemplate = '<div class="col-sm-3 col-xs-6">\
        <img src="$url" alt="$name" class="img-thumbnail">\
        <div class="info-wrapper">\
        <div class="text-muted">$name</div>\
        <div class="text-muted top-padding">$description</div>\
        <div class="text-muted">$date</div>\
        </div>\
        </div>';
    for (let i = 0; i < array.length; i++) {
    let resultHTML = replaceItemTemplate
        .replace(/\$name/gi, array[i].name)
        .replace("$url", array[i].url)
        .replace("$description", array[i].description)
        .replace("$date", array[i].date);
    
    firstBlock.innerHTML += resultHTML;
    };
    first.classList.add("show");
    second.classList.remove('show');
    third.classList.remove('show');
}
// Метод шаблонныx строк
function useTemplateString(array) {
    for (let i = 0; i < array.length; i++) {
    let secondItemTemplate = `<div class="col-sm-3 col-xs-6">\
    <img src="${array[i].url}" alt="${array[i].name}" class="img-thumbnail">\
    <div class="info-wrapper">\
        <div class="text-muted">${array[i].name}</div>\
        <div class="text-muted top-padding">${array[i].description}</div>\
        <div class="text-muted">${array[i].date}</div>\
    </div>\
    </div>`;
    secondBlock.innerHTML += secondItemTemplate;	
    }
    second.classList.add('show');
    first.classList.remove('show');
    third.classList.remove('show');
}
// метод CreateElement
function useCreateElement(array) {
    for (let i = 0; i < array.length; i++) {
    let thirdItemTemplate = document.createElement('div');
    thirdItemTemplate.className = 'col-sm-3 col-xs-6';
    thirdBlock.appendChild(thirdItemTemplate);

    let img = document.createElement('img');
    img.src = array[i].url;
    img.alt = array[i].name;
    img.className = 'img-thumbnail';
    thirdBlock.appendChild(img);

    let infoWrapper = document.createElement('div');
    infoWrapper.className = 'info-wrapper';
    thirdBlock.appendChild(infoWrapper);

    let name = document.createElement('div');
    name.className = 'text-muted';
    name.innerHTML = array[i].name;
    thirdBlock.appendChild(name);

    let description = document.createElement('div');
    description.className = 'text-muted top-padding';
    description.innerHTML = array[i].description;
    thirdBlock.appendChild(description);

    let date = document.createElement('div');
    date.className = 'text-muted';
    date.innerHTML = array[i].date;
    thirdBlock.appendChild(date);
    
    thirdBlock.innerHTML += thirdItemTemplate;
    }
    third.classList.add('show');
    first.classList.remove('show');
    second.classList.remove('show');
}
// главная функция
function init() {
    let newData = [...data];
    newData = transformNewData(newData);
    makeChoiceLine(newData);
    makeChoiceType(newData);
}

btn.addEventListener("click", init);

})()