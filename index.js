const btnEl = document.getElementById("btn");
const animeImgEl = document.querySelector(".anime-img");

btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const data = await response.json();
    animeImgEl.src = data.url;
  } catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    amineNameEl.innerText = "An error happened, please try again";
  }
});
