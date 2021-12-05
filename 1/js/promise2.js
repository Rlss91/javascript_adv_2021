console.log(Math.random());

let randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

/*

what javascript count as false

false:
false
0
""
undefind
null

else they true

*/
if (" ") {
  console.log("its true");
} else {
  console.log("its false");
}

// let promiseP = new Promise((resolve, reject)=>{

// })

//create new promise
let makeCoffie = () => {
  let newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let number = randomNumber(0, 1000);
      if (number % 2) {
        // מספר אי זוגי
        reject({ number, status: false, msg: "this number is odd" }); // reject({ number: number, status: false });
      } else {
        // מספר זוגי
        resolve({ number, status: true }); // resolve({ number: number, status: true });
      }
    }, 2000);
  });
  return newPromise;
};

//use promise in my code
makeCoffie()
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.error(error);
  });
