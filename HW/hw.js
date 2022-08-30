// Function Declaration
console.log("Function Declaration:");

// 1
function add() {
  return console.log(345 + 345);
}
add();

// 2
function addStr() {
  return console.log(345 + 345 + " ni 10ga bulsa 69 chiqadi");
}
addStr();

// 3
function div() {
  return console.log(120 / 20);
}
div();

// 4
function multiply() {
  return console.log(12 * 20);
}
multiply();

// 5
function pow() {
  return console.log(12 ** 3);
}
pow();

// 6
function sub() {
  return console.log(1000 - 545);
}
sub();

// 7
function remainder() {
  return console.log(1455 % 7);
}
remainder();

// 8
function showInfo(from, text) {
  return console.log(from + ": " + text);
}
showInfo("Abdulaziz", "Assalomu Aleykun!");

// 9
function checkCondition(a, b) {
  if (a === 3 && b === 4) {
    return console.log(a ** b);
  } else {
    return console.log("Xatolik yuz berdi!");
  }
}
checkCondition(3, 4);

// 10
function checkCondition(a, b) {
  if (a || b) {
    return console.log(a % 7);
  } else {
    return console.log("Xatolik yuz berdi!");
  }
}
checkCondition(1455, 0);

// Function Expression
console.log("Function Expression :");

// 1
let calcPow = function () {
  return console.log(2 ** 15);
};
calcPow();

// 2
let sum = function () {
  return console.log(265 + 865);
};
sum();

// 3
let div2 = function () {
  return console.log(4432 / "8");
};
div2();

// 4
let sub2 = function () {
  return console.log(50445 - 47489);
};
sub2();

// 5
let multiply2 = function () {
  return console.log(55 * 5);
};
multiply2();

// 6
let remainder2 = function () {
  return console.log(22 + 4);
};
remainder2();

// 7
let showMessage = function (from, text) {
  return console.log(from + ": " + text);
};
showMessage("Abdulaziz", "Hello, everybody!");

// 8
let checkCondition2 = function (a, b) {
  if (a === 20 && b === 3) {
    return console.log(a ** b);
  } else {
    return console.log("Xatolik yuz berdi!");
  }
};
checkCondition2(20, 3);

// 9
let check = function (a, b, c) {
  if (a || b || c) {
    return console.log(c % 5);
  } else {
    return console.log("Xatolik yuz berdi!");
  }
};
check(0, 0, 23);

// 10
let getResult = function (a, b, c) {
  if (a ?? b ?? c) {
    return console.log(c ** "5");
  } else {
    return console.log("ERROR");
  }
};
getResult(null, null, 123);

// Function Arrow
console.log("Function Arrow :");

// 1
let getPow = () => {
  return console.log(23 ** 2);
};
getPow();

// 2
let sum2 = () => {
  return console.log(5 + 3);
};
sum2();

// 3
let div3 = () => {
  return console.log(234532 / "2");
};
div3();

// 4
let sub3 = () => {
  return console.log(654 - 5474);
};
sub3();

// 5
let multiply3 = () => {
  return console.log(34 * 45);
};
multiply3();

// 6
let remainder3 = () => {
  return console.log(43 % 4);
};
remainder3();

// 7
let showMessage2 = (from, text) => {
  return console.log(from + ": " + text);
};
showMessage2("John", "Hello, everybody!");

// 8
let checkCondition3 = (a, b) => {
  if (a === 10 && b === 3) {
    return console.log(a ** b);
  } else {
    return console.log("Xatolik yuz berdi!");
  }
};
checkCondition3(10, 3);

// 9
let checkOr = (a, b, c) => {
  if (a || b || c) {
    return console.log((c % 12) * 3);
  } else {
    return console.log("Xatolik yuz berdi!");
  }
};
checkOr(0, 0, 277);

// 10
let getDefined = (a, b, c) => {
  if (a ?? b ?? c) {
    return console.log(c ** "5" / 5);
  } else {
    return console.log("ERROR");
  }
};
getDefined(null, null, 2);
