setTimeout(() => {
  console.log("happend");
}, 1000);
console.log("syc");

const simulateServer = () => {
  setTimeout(() => {
    let randomNumber = Math.random() * (100 - 1) + 1;
    if (randomNumber % 2 == 0) {
      console.log("data ok");
    } else {
      console.log("data not ok");
    }
  }, 2000);
};

const firstPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
      if (randomNumber % 2 == 0) {
        resolve({ status: "ok", number: randomNumber });
      } else {
        reject({ status: "error", number: randomNumber });
      }
    }, 2000);
  });
};

firstPromise()
  .then((data) => {
    console.log("firstPromise", data);
  })
  .catch((error) => {
    console.error("firstPromise", error);
  });

const executeInPromise = (resolve, reject) => {
  setTimeout(() => {
    let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
    if (randomNumber % 2 == 0) {
      resolve({ status: "ok", number: randomNumber });
    } else {
      reject({ status: "error", number: randomNumber });
    }
  }, 2000);
};

let promise = new Promise((ok, not) => {});

const secondPromise = () => {
  return new Promise((resolve, reject) => {
    executeInPromise(resolve, reject);
  });
};

secondPromise()
  .then((data) => {
    console.log("secondPromise", data);
  })
  .catch((error) => {
    console.error("secondPromise", error);
  });
