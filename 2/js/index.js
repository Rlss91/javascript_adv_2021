window.addEventListener("load", () => {});

const handleBtnClick = async () => {
  try {
    let number = await genNumber();
    console.log("number", number);
  } catch (error) {
    console.error(error);
  }
};
