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

// let alwaysSuccess = () => {
//   return new Promise((res, rej) => {
//     res(true);
//   });
// };

// let alwaysFails = () => {
//   return new Promise((res, rej) => {
//     rej(false);
//   });
// };

//create new promise that will success if choose is true else will fail
let alwaysWhatWeWillChooseAsYouWish = (choose) => {
  return new Promise((res, rej) => {
    if (choose) {
      res("data from promise");
    } else {
      rej("reject from promise");
    }
  });
};

//will do array of promises
//if all success then will show there data in arrayOfData
//else will show the error of the promise that failed
Promise.all([
  alwaysWhatWeWillChooseAsYouWish(true),
  alwaysWhatWeWillChooseAsYouWish(false),
  alwaysWhatWeWillChooseAsYouWish(true),
])
  .then((arrayOfData) => {
    console.log("arrayOfData", arrayOfData);
  })
  .catch((error) => {
    console.log("error from promise all: ", error);
  });
