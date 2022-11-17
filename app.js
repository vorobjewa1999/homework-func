// 1.Сделайте функцию, которая возвращает квадрат числа. Число передается параметром

function func1 ($a) {
    return $a * $a;
}

// 2.Сделайте функцию, которая возвращает сумму двух чисел. 

function func2 ($a, $b) {
    return $a + $b;
}

// 3.Сделайте функцию, которая отнимает от первого числа второе и делит на третье

function func3 ($a, $b, $c) {
    return ($a - $b) / $c;
}

// 4.Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

let func4 = function (func4) {
    switch (func4) {
        case 1: return "Понедельник"
        case 2: return "Вторник"
        case 3: return "Среда"
        case 4: return "Четверг"
        case 5: return "Пятница"
        case 6: return "Суббота"
        case 7: return "Воскресенье"
        default: return "Вы ввели некорректное число";
    }
}

console.log (func4(1));

// 5.Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

function func5 ($a, $b) {
    return $a == $b;
}

console.log(func5(4,4));
console.log(func5(1,7));

// 6.Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

function func6($a, $b) {
    return $a + $b > 10;
}
    console.log(func6(5,5));
    console.log(func6(7,5));
    console.log(func6(1,2));

// 7.Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

function func7($a) {
    return $a < 0;
  }
  console.log(func7(10));
  console.log(func7(-10));

// 8.Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

function isNumberInRange ($a) {
    return $a > 0 && $a < 10;
}
    console.log(isNumberInRange(5))
    console.log(isNumberInRange(10))
    console.log(isNumberInRange(-10))

// 12.Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

function isEven($a) {
    return $a % 2 == 0;
}
 console.log(isEven(5));
 console.log(isEven(4));

// задания 9,10,11,13,15,16 - на массивы (не проходили)





