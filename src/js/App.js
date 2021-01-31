import data from "./data";
import Card from "./Card";
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

  const ui = new UI();
  ui.render(card);
});
