//wait until html page loaded

window.addEventListener("load", () => {
  //use of promise in promiseSimulator file
  makeCoffie()
    //if promise success then do this function
    .then((data) => {
      let ps = document.getElementById("ps");
      let pw = document.getElementById("pw");
      pw.classList.toggle("hid");
      ps.classList.toggle("hid");
      ps.children[0].innerHTML += " " + data.number;
    })
    //if promise fails then do this function
    .catch((error) => {
      let pf = document.getElementById("pf");
      let pw = document.getElementById("pw");
      pw.classList.toggle("hid");
      pf.classList.toggle("hid");
      pf.children[0].innerHTML += " " + error.number;
    });
});
