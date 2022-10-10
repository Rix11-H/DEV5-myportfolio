# 👾DEV5-myportfolio
Featuring all my assignments fromt the Development 5 course as a IMD student (fall 2022)

## 1. Lab 1 - learning git
1. My attitude towards DEV5: [Go to repository](https://github.com/Rix11-H/DEV5-LAB1)

2. I did the git tutorial game last year, so did not retake it!
<img src="https://github.com/Rix11-H/2-imd-webtechadv-portfolio/raw/main/lab1/screenshot-gitLearning.png" alt="git-tutorial" width="400"/>

## 2. Lab 2 - ES6 Bingo game
1. My bingo game can be found hosted on Codesandbox.
> [Go to sandbox](https://codesandbox.io/s/bingo-rix-copy-nbpt3g?file=/js/bingo.js)

2. Study on a ESnext feature: *Logical Assignment Operators*
These operators are a functional combination between the assignement operators (=, += >=,...) and logical operators (||, &&, !).

```
a ||= b;    //Logical OR  assignment operator
c &&= d;    //Logical AND assignment operator
e ??= f;    //Logical coalescing (or nullish) assignment operator
```

### Logical OR  assignment operator
```
a ||= b;
```
This operator will assign the value of b to the value of a, if the value of a is falsy (null, undefined, 0, "",...).
> Note that "falsy" is not in every condition "false", but only in Boolean context.
> [MDN on falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
```
let a = 0;
let b = 5;

a ||= b;

console.log(a); //expected output = 5
```
```
let a = 'Yo';
let b = 1;

a ||= b;

console.log(a); //expected output = Yo
```

### Logical AND assignment operator
```
a &&= b;
```

This operator will assign b to a, when a is truthy (anything but: null, undefined, 0, "",...).
> [MDN on truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

```
let a = 5;
let b = 6;

a &&= b;

console.log(a); //expected output = 6
```
```
let a = 0;
let b = 6;

a &&= b;

console.log(a); //expected output = 0
```

### Logical coalescing assignment operator
```
a ??= b;
```

This operator will ONLY assign b to a when a is NULL or undefined.
> This defines the value as "nullish", which is stricter than "falsy" (as seen above).
> [MDN on nullish](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

```
let a = null;
let b = 5;

a ??= b;

console.log(a); //expected output = 5
```
```
let a = 0;
let b = 5;

a ??= b;

console.log(a); //expected output = 0 because it's falsy but not nullish
```
```
let a = "Hello";
let b = 5;

a ??= b;

console.log(a); //expected output = "Hello" because truthy and not nullish
```

### Want to learn more?
- [MDN page on ||=](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
- [javascripttutorial.net](https://www.javascripttutorial.net/es-next/javascript-logical-assignment-operators/)
- [Short YT-video on this](https://www.youtube.com/watch?v=JfiEC0MIIs0)


## 1. Lab 3 - API connections
For this project, I made a weather app that shows you Marvel heroes based on the weather.
This application was created by retrieven geolocation data, checking the weather and adding the Marvel API.

[Checkout my project repository](https://github.com/Rix11-H/DEV5-LAB3)

[Visit the live project on Vercel](https://weather-application-rix11-h.vercel.app/)

<div style="text-align:center"><img src="https://github.com/Rix11-H/DEV5-LAB3/blob/main/weatherHeroes/public/Schermafbeelding%202022-10-10%20140708.png" /></div>
