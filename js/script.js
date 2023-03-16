window.addEventListener("load", fetchOnLoad);

function fetchOnLoad() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((json) => {
      const advice = json.slip;
      const adviceTitle = document.querySelector(".advice__title");
      const adviceText = document.querySelector(".advice__text");
      const newTitle = "advice #" + advice.id;
      adviceTitle.innerHTML = newTitle;
      const newText = `"${advice.advice}"`;
      console.log(newText);
      adviceText.innerHTML = newText;
    });
}

const dice = document.querySelector(".dice");
dice.addEventListener("click", fetchOnLoad);
