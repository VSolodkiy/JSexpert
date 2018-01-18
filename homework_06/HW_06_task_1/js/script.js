/* Не совсем понял где нужно ставить (;), если код в одну строку тогда  выдается ошибка 
SyntaxError: Unexpected token (1:69) которая пропадает после вставки (;) перед объявлением второй функции,
но после переноса все на новые строки, необходимость в (;) пропадает, как так? результат консоли - temlate.js ?
*/

(function(win){var params = {
    states:{url:"/",template: "temlate.js"}
}
function setStates(params)
{if(win && !win.params){
    win.params = params;
}
}
setStates();
console.log(params.states.template);})(window);