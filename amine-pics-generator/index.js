const btnEl = document.getElementById("btn");
const amineNameEl = document.querySelector(".anime-name");
btnEl.addEventListener("click", async function () {
    btnEl.innerText = "Loading...";
    amineNameEl.innerText = "Updating...";
    const response = await fetch("https://api.catboys.com/img");
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    amineNameEl.innerText = "An error happened, please try again";
  }
});
