const DisplayJoke = () => {
  // https://api.blablagues.net/?rub=blagues
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke_title = data.data.content.text_head;
      const joke_para = data.data.content.text;

      header.textContent = joke_title;
      content.textContent = joke_para
        ? joke_para
        : joke_para.text_hidden;
    })
    .catch((err) => console.log(err));
};

DisplayJoke();

document.body.addEventListener("click", DisplayJoke);