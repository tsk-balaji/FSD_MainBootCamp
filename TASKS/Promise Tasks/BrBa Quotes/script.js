function fetchQuote() {
  fetch("https://api.breakingbadquotes.xyz/v1/quotes/")
    .then((response) => response.json())
    .then((data) => {
      const quoteDiv = document.createElement("div");
      quoteDiv.classList.add("quote");
      const authorDiv = document.createElement("div");
      authorDiv.classList.add("author");
      quoteDiv.innerText = data[0].quote;
      authorDiv.innerText = "-" + data[0].author;
      quoteDiv.appendChild(authorDiv);
      document.body.appendChild(quoteDiv);
      console.log(data[0].quote);
      console.log(data[0].author);
      console.log(authorDiv);
      console.log(quoteDiv);
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
    });
}

fetchQuote();
