import Bingo from "./Bingo.js";

export default class Card {
  constructor(title) {
    this.title = title;
  }

  markDone(target) {
    if (target.classList.contains("bingo__card--done")) {
      target.classList.remove("bingo__card--done");
    } else {
      target.classList.add("bingo__card--done");
    }
  }

  render(counter) {
    let card = document.createElement("div");
    card.innerHTML = this.title;
    card.classList.add("bingo__card");
    card.dataset.number = counter + 1;
    card.setAttribute("id", `bingo__card${card.dataset.number}`);
    document.querySelector(".bingo__board").appendChild(card);

    card.addEventListener("click", (e) => {
      this.markDone(e.target);
      Bingo.checkWinner();
      Bingo.save();
    });
  }
}
