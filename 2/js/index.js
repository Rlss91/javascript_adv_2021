window.addEventListener("load", () => {});

const handleBtnClick = async () => {
  try {
    let number = await genNumber();
    console.log("number", number);
    document.getElementById(
      "mylist"
    ).innerHTML += `<li class="list-group-item">${number}</li>`;
  } catch (error) {
    console.error(error);
  }
};
