const DisplayJoke = () => {
  // https://api.blablagues.net/?rub=blagues
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;

      header.textContent = joke.text_head;
      content.textContent = joke.text ? joke.text : joke.text_hidden;
    })
    .catch((err) => console.log(err));
};

DisplayJoke();

document.body.addEventListener("click", DisplayJoke);