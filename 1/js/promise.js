setTimeout(() => {
  console.log("happend");
}, 1000);
console.log("syc");

class A {
  f1 = () => {
    console.log("arro", this);
  };
  f2() {
    console.log("normal", this);
  }
}

window.addEventListener("load", () => {
  let a = new A();
  a.f1();
  a.f2();
});
