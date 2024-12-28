console.log("hej");

const title = document.querySelector("#title");
const ul = document.querySelector("#ul");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const titleFromHome = urlParams.get("title");

title.textContent = titleFromHome;

console.log(title.textContent);

if (title.textContent === "Projects") {
  const shoppingList = {
    name: "Project on making a simple shoppinglist",
    href: "https://richardmattsson.github.io/shoppingList/",
  };
  const ericaPaintings = {
    name: "Example website for a painter artist",
    href: "https://richardmattsson.github.io/Erica/",
  };
  const soccerStats = {
    name: "My site about european fotball",
    href: "https://richardmattsson.github.io/SoccerStats/",
  };
  const blackJack = {
    name: "The card game 'Black-jack'",
    href: "https://richardmattsson.github.io/blackjack2/",
  };
  const weatherApp = {
    name: "WeatherApp",
    href: "https://richardmattsson.github.io/weatherApp/",
  };

  createProjectLinks(weatherApp);
  createProjectLinks(blackJack);
  createProjectLinks(soccerStats);
  createProjectLinks(ericaPaintings);
  createProjectLinks(shoppingList);

  function createProjectLinks(project) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add("projectLinks");
    li.textContent = project.name;
    a.setAttribute("href", project.href);
    a.appendChild(li);
    ul.appendChild(a);
  }
}
