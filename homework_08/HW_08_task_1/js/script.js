var total = 0;

for (var i = 0; i < 15; i++) {
    var first = Math.floor((Math.random() * 6) + 1);
    var second = Math.floor((Math.random() * 6) + 1);
 
    if ( i == 8 || i == 13) {
        continue;
    }
    document.getElementById("result").innerHTML += "Первая кость: " + first + " Вторая кость: " + second + " ";
    if (first == second) {
        document.getElementById("result").innerHTML += "Выпал дубль. Число " + first + " ";
    }
    if (first < 3 && second > 4) {
        document.getElementById("result").innerHTML += "Большой разброс между костями.Разница составляет " + (second - first) + " ";
    }
    total += first + second;
}
var result = (total > 100) ? "Победа, вы набрали очков " + total : "Вы проиграли, у вас очков " + total;
document.getElementById("result").innerHTML = result;
