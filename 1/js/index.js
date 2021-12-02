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
  //for, while, do while
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  for (let item of arr) {
    console.log(item);
  }
}

//test
