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

class Animal {
  name;
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  typeName;
  constructor(name, typeName) {
    super(name);
    this.typeName = typeName;
  }

  getName() {
    return this.name;
  }
}

let dog = new Dog("dog", "asdfsdf");
console.log("dog", dog);
console.log("dog name", dog.name);

class AAA {
  f1 = () => {
    console.log("arro", this);
  };
  f2() {
    console.log("normal", this);
  }
}

window.addEventListener("load", () => {
  let a = new AAA();
  a.f1();
  a.f2();
});

// function f1(){}
// let f1 = ()=>{}
