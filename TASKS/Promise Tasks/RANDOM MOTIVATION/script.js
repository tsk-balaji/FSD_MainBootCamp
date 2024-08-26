async function fetchAdvice() {
  await fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      const adviceDiv = document.createElement("div");
      adviceDiv.classList.add("advice");
      const authorDiv = document.createElement("div");
      authorDiv.classList.add("author");
      adviceDiv.innerText = data.advice;
      adviceDiv.appendChild(authorDiv);
      document.body.appendChild(adviceDiv);
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
    });
}

fetchAdvice();
