// Function Declaration
function declarFunc() {
  return console.log(2 + 2);
}

declarFunc();

// Function Arrow

let arrowFunc = () => {
  return console.log(3 + 3);
};

arrowFunc();

// Function Expression

const myExpressFunc = function () {
  return console.log(11 ** 15);
};
myExpressFunc();

// Arguments

const myFunc = (a, b, c) => {
  return console.log(a + b + c);
};

// myFunc("Mani yoshim ", 20, "da");

// if va else function ichida
let func = (a, b) => {
  if (a === 20 && b === 40) {
    return console.log(a + b);
  } else {
    return console.log("Xatoni top");
  }
};
