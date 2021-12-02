function functionName() {
  let n1 = 5;
  let n2 = n1;
  console.log("n1", n1);
  let obj = { key: "value" };
  let obj2 = obj;
  obj.key = "value2";
  console.log("obj", obj);
  console.log("obj2", obj2);
  let obj4 = { key: "value3" };
  let obj5 = { a123: "a123" };
  let obj3 = { ...obj, ...obj4, ...obj5, moreData: "value" };
  console.log("obj3", obj3);
  objectDe(obj3);
}
functionName();

function objectDe(obj) {
  let { a123, moreData, a124 } = obj;
  /*

  let a123 = obj.a123;
  let moreData = obj.moreData;
  let a124 = obj.a124;

  */
  console.log("a123", a123);
  console.log("moreData", moreData);
  console.log("a124", a124);
}

function ArrayDe() {
  let arr = [1, 2, 3];
  let arr2 = [5.2, "sdaffsd", 3];
  let [asdhijf, item2, item3, item4] = arr;
  let [itemPrice, itemName, itemStock] = arr2;
  /*

    itemPrice = arr2[0]
    itemName = arr2[1]
    itemStock = arr2[2]

  */
  console.log(asdhijf, item2, item3, item4);
}

ArrayDe();

function Loops() {
  let arr = [1, 2, 3];
  let arrObj = [{ key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }];
  //for, while, do while
  console.log("for loop");
  let arrL = arr.length;
  for (let i = 0; i < arrL; i++) {
    console.log("arr[i]", arr[i]);
  }
  console.log("for of loop");
  for (let item of arr) {
    console.log("item", item);
  }
  console.log("for loop");
  const arrObjL = arrObj.length;
  for (let i = 0; i < arrObjL; i++) {
    console.log("arrObj[i]", arrObj[i]);
  }
  console.log("for of loop");
  for (let item of arrObj) {
    console.log("item", item);
  }
}

Loops();

function defParmsFunc(a = 5) {}

defParmsFunc();

function sprArgs(...a) {
  console.log(a);
  let sum = 0;
  for (let num of a) {
    sum += num;
  }
  console.log(sum / a.length);
}

sprArgs(1, 2, 3);
sprArgs(3, 4, 5, 6);
sprArgs(2, 3);

function objDeFunc({ key }) {
  console.log(key);
}

objDeFunc({ key: "123", key2: "123" });
