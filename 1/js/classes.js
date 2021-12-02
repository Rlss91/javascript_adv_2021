class A {
  static avg(...a) {
    console.log(a);
    let sum = 0;
    for (let num of a) {
      sum += num;
    }
    console.log(sum / a.length);
  }

  publicP; //public
  #privateP;

  constructor() {
    this.publicP = 4;
    this.#privateP = 5;
  }
}

A.avg(1, 2, 3, 4);
let a = new A();
console.log("a.publicP", a.publicP);
// console.log("a.publicP", a.#privateP);

class Mss {
  #mass;

  constructor(price) {
    this.#mass = 0.17;
    this.price = price;
  }

  calcMss() {
    console.log("you have to pay", this.price * this.#mass);
  }
}
let mss = new Mss(15);
// mss.#mass = 0;
mss.calcMss();
