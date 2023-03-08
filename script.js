"use strict";
let sum = 0;
let count = 0;

//task 1

{
  for(let i=1; i < 50; i++) {
    console.log(i);
  }
  console.log ("--------------");
  for(let i=35; i > 8; i--) {
    console.log(i);
  }
}

//task 2

{
  let i = 89;
  while(i > 11) {
    document.write(`${i} <br />`);
    i--;
  }
}

//task 3

{
  for(let i=0; i < 100; i++) {
    sum += i;
    console.log(`Сумма чисел от нуля до 100: ${sum}`);
}
}

//task 4

{
  sum = 0;
  for (let i=1; i<= 5; i++) {
      sum += i;
      console.log (`Сумма чисел от 1 до 5: ${sum}`);
  }
}

//task 5

{
  let i = 8;
  for(; i < 56; i+=2) {
    console.log(i);
  }
  i = 8;
  while (i < 56) {
    console.log(i);
    i+=2;
  }
}

//task 6

// {
//   for (let i = 2; i < 10; i++ ) {
//     for (let j = 1; j <=10; j++) {
//       console.log (`${i} * ${j} = ${i*j}`);
//     }
//   }
// }

//task 7

// {
//   let n = 1000;
//   let num = 0;
//   for (; n > 50; n /= 2){
//        console.log(n);
//        num++;
//   }
//   console.log(`Кол-во итераций: ${num}`);
// }

//task 8

{
  let number;
  sum = 0;
  count = 0;
  while (number != 0 || number != " ") {
    number = +prompt("Введите число") ;
    if(isNaN(+number) || number < 0){
      alert('Error'); continue;
  }
    else {
      sum += +number;
      count++;
    }
  }
  console.log(`Сумма чисел: ${sum}`)
  console.log(`Среднее арифметическое: ${sum /= count}`);
}

//task 9

{
  let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
  let kol = '', min, max;
  for (let i = 0; i < str.length; i++) {
    kol += str[i];
    if (+str[i] && !+str[i+1]) {
      if (typeof min !== 'number' || kol < +min) min = +kol;
      if (typeof max !== 'number' || kol > +max) max = +kol;
      kol = '';
    }
  }
  console.log('Min:', min, 'Max:', max)
}

//task 10

{
  let num = 0;
  sum = 0;
  count = 0;
  let n = String((Math.floor(Math.random()*999 + 1)));
  console.log(`Число: ${n}`)
  for (let i = 0; i < n.length; i++) {
    num = +n[i];
    sum += +n[i];
    count++;
    console.log(`${num}`);
  }
  console.log(`Число наоборот: ${n.split("").reverse().join("")}`);
  console.log(`Сумма чисел: ${sum}`);
  console.log(`Кол-во цифр в числе: ${count}`);
}