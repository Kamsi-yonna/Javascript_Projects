const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;

updateText();

f characterIndex++;
  containerEl.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  
