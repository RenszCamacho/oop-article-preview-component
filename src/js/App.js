import data from "./data";
import Card from "./Card";
import Social from "./Social";
import UI from "./UI";

window.addEventListener("DOMContentLoaded", () => {
  const card = new Card(
    data.poster,
    data.title,
    data.description,
    data.image,
    data.name,
    data.date
  );

  const social = new Social(data.facebook, data.twitter, data.pinterest);

  const ui = new UI();
  ui.render(card, social);
  ui.handleClick();
});
