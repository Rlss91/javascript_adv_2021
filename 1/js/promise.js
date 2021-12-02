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

const trdPromise = () => {
  return new Promise((resolve, reject) => {
    let seconds = Math.floor(Math.random() * (7 - 1) + 1);
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
      if (randomNumber % 2 == 0) {
        resolve({ status: "ok", number: randomNumber, waitTime: seconds });
      } else {
        reject({ status: "error", number: randomNumber, waitTime: seconds });
      }
    }, seconds * 1000);
  });
};

let promiseArray = [];
for (let i = 0; i < 5; i++) {
  promiseArray = [...promiseArray, trdPromise()];
}

Promise.all(promiseArray)
  .then((data) => {
    console.log("trdPromise", data);
  })
  .catch((err) => {
    console.error("trdPromise err", err);
  });

// trdPromise()
//   .then((data) => {
//     console.log("trdPromise", data);
//   })
//   .catch((error) => {
//     console.error("trdPromise", error);
//   });

const frthPromise = () => {
  return new Promise((resolve, reject) => {
    let seconds = Math.floor(Math.random() * (7 - 1) + 1);
    setTimeout(() => {
      let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
      resolve({ status: "ok", number: randomNumber, waitTime: seconds });
    }, seconds * 1000);
  });
};

/*
    trdPromise().catch((erro) => erro)
    ↕
    trdPromise().catch((erro) => {return erro})
*/
Promise.all([frthPromise(), trdPromise().catch((erro) => erro)])
  .then((data) => {
    console.log("trdPromise2", data);
    for (let item of data) {
      if (item.status === "ok") {
        console.log("item", item);
      } else {
        console.log("error in item", item);
      }
    }
  })
  .catch((err) => {
    console.error("trdPromise2 err", err);
  });
