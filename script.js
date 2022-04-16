// card Section

const input = document.getElementById("submit");
const thankYou = document.getElementById("thankYouSection");
const card = document.getElementById("card");
const selectNumber = document.getElementById("root");
const rateNumber = document.querySelectorAll(".btnNum");

rateNumber.forEach((e) => {
  e.addEventListener("click", (E) => {
    console.log("first");
    selectNumber.innerHTML = E.target.value;
    e.classList.add("active");
  });
});

input.addEventListener("click", () => {
  console.log("first");
  card.remove();
  thankYou.style.display = "grid";
});
