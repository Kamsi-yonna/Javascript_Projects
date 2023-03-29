const btnEl = document.getElementById("btn");
    amineNameEl.innerText = "Updating...";
    const response = await fetch("https://api.catboys.com/img");
    btnEl.innerText = "Get Anime";
    amineNameEl.innerText = "An error happened, please try again";
  }
});
