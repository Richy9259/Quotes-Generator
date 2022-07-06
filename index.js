let quotesDisplay = document.querySelector("#quote");

const localQuotes = [
  {
    quote: "When you reach the end of your rope, tie a knot and hang on.",
    author: "Abraham lincoln",
  },
  {
    quote:
      "There are no bad pictures; that's just how your face looks sometimes.",
    author: "Abraham lincoln",
  },
  {
    quote:
      "When I do good, I feel good. When I do bad, I feel bad. That's my religion.",
    author: "Abraham lincoln",
  },
  {
    quote: "Do I not destroy my enemies when I make them my friends?",
    author: "Abraham lincoln",
  },
  {
    quote:
      "My Best Friend is a person who will give me a book I have not read.",
    author: "Abraham lincoln",
  },
];

let quotes = JSON.parse(localStorage.getItem("quotes"));
if (!quotes) {
  quotes = localQuotes;
  localStorage.setItem("quotes", JSON.stringify(localQuotes));
}

let count = 0;

function generateRandomQuotes() {
  const el = quotes[count];
  quotesDisplay.innerHTML = `
  <p>${el.quote}</p>
  <span>${el.author}</span>`;
  count = count < quotes.length - 1 ? count + 1 : 0;
}
generateRandomQuotes();
