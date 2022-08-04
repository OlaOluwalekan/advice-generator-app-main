console.log(window.innerWidth);

const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const nextAdvice = document.querySelector(".die-container");

fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    let advise = data.slip;
    console.log(advise);
    adviceId.innerHTML = "advise #" + advise.id;
    adviceText.innerHTML = advise.advice;
  });

// window.onload = () => {};

nextAdvice.onclick = () => {
  nextAdvice.style.transform = "rotate(360deg)";

  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      let advise = data.slip;
      console.log(advise);
      adviceId.innerHTML = "advise #" + advise.id;
      adviceText.innerHTML = advise.advice;
    });

  setTimeout(() => {
    nextAdvice.style.transform = "rotate(0deg)";
  }, 1000);
};
