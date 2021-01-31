const cardBtn = document.getElementById("card__btn");

const toogle = (btn) => {
  const active = document.getElementById("active");
  btn.addEventListener("click", () => {
    active.classList.toggle("active");
    cardBtn.classList.toggle("card__btn--active");
  });
};

toogle(cardBtn);
