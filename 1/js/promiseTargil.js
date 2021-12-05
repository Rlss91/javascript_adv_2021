/*

    1) generate promise that accepts 2 numbers and one operation (+, -)
    2) other operation is error
    3) calc 5 times and display the results after 1 sec
    4) all the results must be shown

  */

//create function that accepts 2 numbers and one operator
let calcPromise = (num1, num2, opr) => {
  //create new promise
  return new Promise((res, rej) => {
    setTimeout(() => {
      switch (opr) {
        case "+":
          res(num1 + num2);
          break;
        case "-":
          res(num1 - num2);
          break;
        default:
          rej("this is not valid operator");
          break;
      }
    }, 1000);
  });
};

Promise.allSettled([
  calcPromise(5, 5, "+"),
  calcPromise(5, 5, "-"),
  calcPromise(5, 5, "+"),
  calcPromise(5, 5, "="),
  calcPromise(5, 5, "?"),
]).then((arrData) => {
  console.log(arrData);
});
