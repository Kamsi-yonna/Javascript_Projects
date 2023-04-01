const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
