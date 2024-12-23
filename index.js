console.log("hej");

const title = document.querySelector("#title");
const ul = document.querySelector("#ul");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const titleFromHome = urlParams.get("title");

title.textContent = titleFromHome;

console.log(title.textContent);

if (title.textContent === "Projekt") {
  const shoppingList = {
    name: "Shopping-lista",
    href: "https://richardmattsson.github.io/shoppingList/",
  };
  const ericaPaintings = {
    name: "Ericas målningar",
    href: "https://richardmattsson.github.io/Erica/",
  };
  const soccerStats = {
    name: "Fotbolls-sida",
    href: "https://richardmattsson.github.io/SoccerStats/",
  };
  const blackJack = {
    name: "Black-jack",
    href: "https://richardmattsson.github.io/blackjack2/",
  };

  createProjectLinks(shoppingList);
  createProjectLinks(ericaPaintings);
  createProjectLinks(soccerStats);
  createProjectLinks(blackJack);

  function createProjectLinks(project) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add("projectLinks");
    a.textContent = project.name;
    a.setAttribute("href", project.href);
    li.appendChild(a);
    ul.appendChild(li);
  }
}
