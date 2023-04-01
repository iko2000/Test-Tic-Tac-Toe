`use strict`;

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");
const div6 = document.querySelector("#div6");
const div7 = document.querySelector("#div7");
const div8 = document.querySelector("#div8");
const div9 = document.querySelector("#div9");
const winner = document.querySelector("#winner");
const resetbtn = document.querySelector("#rest-btn");

const divs = document.querySelectorAll(".divs");
let count = 0;
resetbtn.addEventListener("click", function () {
  divs.forEach((el) => el.classList.remove("tic"));
  divs.forEach((el) => el.classList.remove("toe"));
  count = 0;
  winner.textContent = " ";

});
console.log(divs);

divs.forEach((el) =>
  el.addEventListener("click", function (e) {
    e.preventDefault();

    if (el.className === "tic" || el.className === "toe") return;
    count++;

    if (count === 1) {
      el.classList.add("tic");
      console.log(div1.className);
      wincheck();
    }

    if (count === 2) {
      el.classList.add("toe");
      wincheck();
    }
    if (count === 3) {
      el.classList.add("tic");
      wincheck();
    }
    if (count === 4) {
      el.classList.add("toe");
      wincheck();
    }
    if (count === 5) {
      el.classList.add("tic");
      wincheck();
    }
    if (count === 6) {
      el.classList.add("toe");
      wincheck();
    }
    if (count === 7) {
      el.classList.add("tic");
     wincheck()
    }
    if (count === 8) {
      el.classList.add("toe");
     wincheck()
    }
    if (count === 9) {
      el.classList.add("tic");
     wincheck()
    }
  })
);

//Game Logic
const wincheck = function () {
  if (
    div1.className === "divs tic" &&
    div4.className === "divs tic" &&
    div7.className === "divs tic"
  ) {
    winner.textContent = "Player1 Won";

  }
  if (
    div2.className === "divs tic" &&
    div5.className === "divs tic" &&
    div8.className === "divs tic"
  ) {
    winner.textContent = "Player1 Won";

  }
  if (
    div3.className === "divs tic" &&
    div6.className === "divs tic" &&
    div9.className === "divs tic"
  ) {
    winner.textContent = "Player1 Won";

  }
  if (
    div1.className === "divs tic" &&
    div2.className === "divs tic" &&
    div3.className === "divs tic"
  ) {
    winner.textContent = "Player1 Won";

  }
  if (
    div4.className === "divs tic" &&
    div5.className === "divs tic" &&
    div6.className === "divs tic"
  ) {
    winner.textContent = "Player1 Won";

  }
  if (
    div7.className === "divs tic" &&
    div8.className === "divs tic" &&
    div9.className === "divs tic"
  ) {
    winner.textContent = "Player1 Won";

  }
  if (
    div1.className === "divs tic" &&
    div5.className === "divs tic" &&
    div9.className === "divs tic"
  ) {
    winner.textContent = "Player1 Won";

  }
  if (
    div3.className === "divs tic" &&
    div5.className === "divs tic" &&
    div7.className === "divs tic"
  ) {
    winner.textContent = "Player1 Won";

  }
  if (
    div1.className === "divs toe" &&
    div4.className === "divs toe" &&
    div7.className === "divs toe"
  ) {
    winner.textContent = "Player2 Won";
  }
  if (
    div2.className === "divs toe" &&
    div5.className === "divs toe" &&
    div8.className === "divs toe"
  ) {
    winner.textContent = "Player2 Won";
  }
  if (
    div3.className === "divs toe" &&
    div6.className === "divs toe" &&
    div9.className === "divs toe"
  ) {
    winner.textContent = "Player2 Won";
  }
  if (
    div1.className === "divs toe" &&
    div2.className === "divs toe" &&
    div3.className === "divs toe"
  ) {
    winner.textContent = "Player2 Won";
  }
  if (
    div4.className === "divs toe" &&
    div5.className === "divs toe" &&
    div6.className === "divs toe"
  ) {
    winner.textContent = "Player2 Won";
  }
  if (
    div7.className === "divs toe" &&
    div8.className === "divs toe" &&
    div9.className === "divs toe"
  ) {
    winner.textContent = "Player2 Won";
  }
  if (
    div1.className === "divs toe" &&
    div5.className === "divs toe" &&
    div9.className === "divs toe"
  ) {
    winner.textContent = "Player2 Won";
  }
  if (
    div3.className === "divs toe" &&
    div5.className === "divs toe" &&
    div7.className === "divs toe"
  ) {
    winner.textContent = "Player2 Won";
  }
};
