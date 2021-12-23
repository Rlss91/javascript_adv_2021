const genNumber = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let date = new Date();
      // console.log(date.getMilliseconds());

      // return date.getMilliseconds();
      let number = date.getMilliseconds();
      if (number % 2 == 0) res(number);
      else rej({ msg: "this number is odd", number: number });
    }, 10);
  });
};
