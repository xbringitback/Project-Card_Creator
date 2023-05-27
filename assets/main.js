const output = document.querySelector(".output");

class Card {
  constructor(name, points, type, effect, story, image) {
    this.name = name;
    this.points = points;
    this.type = type;
    this.effect = effect;
    this.story = story;
    this.image = image;
  }

  newCard() {
    console.log(
      `Card Name: ${this.name}
      Points: ${this.points}
      Type: ${this.type}
      Effect: ${this.effect}
      Story: ${this.story}
      Image: ${this.image}`
    );
  }

  createCardElement() {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card-design");

    const nameEl = document.createElement("h2");
    nameEl.innerHTML = `Name: ${this.name}`;
    cardEl.appendChild(nameEl);

    const pointsEl = document.createElement("h2");
    pointsEl.innerHTML = `Points: ${this.points}`;
    cardEl.appendChild(pointsEl);

    const imageEl = document.createElement("img");
    imageEl.src = this.image;
    cardEl.appendChild(imageEl);

    // const imageElement = document.createElement("img");
    // imageElement.src = "https://source.unsplash.com/random/25";
    // cardElement.appendChild(imageElement);

    const typeEl = document.createElement("h2");
    typeEl.innerHTML = `Type: ${this.type}`;
    cardEl.appendChild(typeEl);

    const effectEl = document.createElement("h2");
    effectEl.innerHTML = `Effect: ${this.effect}`;
    cardEl.appendChild(effectEl);

    const storyEl = document.createElement("h2");
    storyEl.innerHTML = `Story: ${this.story}`;
    cardEl.appendChild(storyEl);

    return cardEl;
  }
}

const createCardFunction = () => {
  const name = document.getElementById("name").value;
  const points = document.getElementById("points").value;
  const type = document.getElementById("type").value;
  const effect = document.getElementById("effect").value;
  const story = document.getElementById("story").value;
  const image = document.getElementById("image").value;

  const newCard = new Card(name, points, type, effect, story, image);

  newCard.newCard();
  console.log(newCard);

  const newCardEl = newCard.createCardElement();
  output.appendChild(newCardEl);
};
