let randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

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
