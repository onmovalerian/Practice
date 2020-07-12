"use strict";

if(4 == 9) {
    console.log ('Отлично!');
} else {
    console.log('ошибка');


}



if (num < 49){
    console.log('Ошибка');
 } else if (num > 100) {
     console.log ('Многовато');
 } else {
    console.log('Молодцом!');
 }

 ( num === 50) ? console.log('Молодца!') : console.log('Вы чё пацаны?!');


const num =40;

switch (num) {
    case 49:
        console.log('Неправильно');
        break;
    case 100:
        console.log('Неправильно');
        break;
    case 50:
        console.log('Правильно');
        break;
        default:
            console.log('Проверь внимательно');
            break;
}


let num = 40;

// while (num <= 50) {
// console.log(num);
// num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num <= 50);

for ( let i=1; i < 12; i++ ) {
    if (i===6){
        // break;
        continue;
    }

    console.log(num);
}