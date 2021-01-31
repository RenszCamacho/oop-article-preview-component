class UI {
  render(e) {
    const root = document.getElementById("root"),
      article = document.createElement("article");
    article.className = "card";
    article.innerHTML = `
        <div class="card__header">
          <img class="card__img" src="${e.poster}" alt="drawers" />
        </div>
        <div class="card__body">
          <h2 class="card__title">
            ${e.title}
          </h2>
          <p class="card__description">
            ${e.description}
          </p>
          <ul class="card__list">
            <li class="card__item">
              <img
                class="card__listImg"
                src="${e.image}"
                alt="${e.name}"
              />
            </li>
            <li class="card__item">
            <span class="card__name">${e.name}</span>
              <span class="card__date">${e.date}</span>
            </li>
            <li class="card__item">
              <button
                id="card__btn"
                class="card__btn"
                type="button"
                name="button toogle"
                aria-label="button toogle"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                  <path
                    fill="#6E8098"
                    d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div id="active" class="card__active">
          <ul class="active__list">
            <li class="active__item">
              <p class="active__description">Share</p>
            </li>
            <li class="active__item active__item--social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="active__link"
              >
                <img src="./images/icon-facebook.svg" alt="facebook link" />
              </a>
            </li>
            <li class="active__item active__item--social">
              <a
                href="https://twitter.com"
                target="_blank"
                class="active__link"
              >
                <img src="./images/icon-twitter.svg" alt="twitter link" />
              </a>
            </li>
            <li class="active__item active__item--social">
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                class="active__link"
              >
                <img src="./images/icon-pinterest.svg" alt="pinterest link" />
              </a>
            </li>
          </ul>
        </div>
    `;
    root.appendChild(article);
  }

  handleClick() {
    const cardBtn = document.getElementById("card__btn");

    const toogle = (btn) => {
      const active = document.getElementById("active");
      btn.addEventListener("click", () => {
        active.classList.toggle("active");
        cardBtn.classList.toggle("card__btn--active");
      });
    };

    toogle(cardBtn);
  }
}

export default UI;
