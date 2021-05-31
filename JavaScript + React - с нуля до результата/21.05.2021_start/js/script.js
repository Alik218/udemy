"use strict";

//  // Практика ч.3


let numberOfFilms;
  
function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilsm() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
  
  
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = +b;
      console.log('ok');
    }
    else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilsm();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('error');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();

console.log(personalMovieDB);  


//  // урок 17 Методы и свойства строк и чисел


// const str = 'test';
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world';
// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 3));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));


//  // урок 16 Function


// let num = 20;

// function showFirstMessage (text) {
//   console.log(text);
//   num = 10;
//   console.log(num);
// }

// showFirstMessage('Hello World');
// console.log(num);

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 10));
// console.log(calc(12, 23));


// function ret() {
//   let num = 50;
//   return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//   console.log('Hello');
// };

// logger();


// const calc = (a, b) => {
//   console.log('1');
//   return a + b;
// };


//  // урок 14 Практика ч2


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('На сколько оцените его?', '');


//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = +b;
//     console.log('ok');
//   }
//   else {
//     console.log('error');
//     i--;
//   }
// }

//  // вариант 1
// switch (true) {
//   case personalMovieDB.count < 10:
//     console.log('Просмотрено довольно мало фильмов');
//     break;

//   case personalMovieDB.count > 10 && personalMovieDB.count < 30:
//     console.log('Вы классический зрител');
//     break;

//   case personalMovieDB.count >= 30:
//     console.log('Вы киноман');
//     break;

//   default:
//     console.log('error');
//     break;
// }

//  // вариант 2 
// if (personalMovieDB.count < 10) {
//   console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//   console.log('Вы киноман');
// } else {
//   console.log('error');
// }


// console.log(personalMovieDB);  


//  // Урок 13 Циклы


// let num = 50;

// while (num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }

//   console.log(i);
// }


//  // Урок 12 Условия


// if (4 == 9) {
//     console.log('ok!');
// } else {
//     console.log('Error');
// }

// const num = 38;

// if (num < 49) {
//     console.log('Eroor');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('ok');
// }


// (num === 50) ? console.log('ok') : console.log('Eroor');


// switch (true) {
//     case num < 49:
//       console.log('error 49');
//       break;

//     case num == 50:
//       console.log('ok');
//       break;

//     case num < 100:
//       console.log('error 100');
//       break;

//     default:
//       console.log('не в етот раз');
//       break;
// }


//  // Урок 11 Практика ч.1


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = +b;
// personalMovieDB.movies[c] = +d;

// console.log(personalMovieDB);


//  // Урок 10 GitHub


// // Урок 9 Операторы в JS


// let incr = 10;
// let decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

  

// // Урок 8 Интерполяция (ES6)


// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Vitaliy';

// alert(`Hello, ${user}`);


// // Урок 7 Простое общения с пользователем


// alert('hello wold');

// const result = confirm('Are you heree?');
// console.log(result);

// const answer = prompt('You heaw 18?','18');
// console.log(answer);

// const answers = [];

// answers[0] = prompt('как ваше имя?', '');
// answers[1] = prompt('как ваше фамилия?', '');
// answers[2] = prompt('лет скока а?', '');

// document.write(answers);


