async function fetchAdvice() {
  await fetch("https://api.gameofthronesquotes.xyz/v1/random")
    .then((response) => response.json())
    .then((data) => {
      var sentence = data.sentence;
      var character = data.character.name;
      const quoteDiv = document.createElement("div");
      quoteDiv.classList.add("quote");
      const byDiv = document.createElement("div");
      byDiv.classList.add("by");
      quoteDiv.innerText = sentence;
      byDiv.innerText = ` -  ${character}`;
      quoteDiv.appendChild(byDiv);
      document.body.appendChild(quoteDiv);
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchAdvice();
});
