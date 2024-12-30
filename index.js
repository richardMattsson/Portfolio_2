console.log("hej");

const title = document.querySelector("#title");
const ul = document.querySelector("#ul");
const main = document.querySelector("#main");
const home = document.querySelector("#home");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const titleFromHome = urlParams.get("title");

title.textContent = titleFromHome;

console.log(title.textContent);

if (title.textContent === "Projects") {
  const shoppingList = {
    name: "Project on making a simple shoppinglist",
    href: "https://richardmattsson.github.io/shoppingList/",
    img: "shoppingList.png",
  };
  const ericaPaintings = {
    name: "Example website for a painter artist",
    href: "https://richardmattsson.github.io/Erica/",
    img: "erica.png",
  };
  const soccerStats = {
    name: "My site about european fotball",
    href: "https://richardmattsson.github.io/SoccerStats/",
    img: "soccerStat.png",
  };
  const blackJack = {
    name: "The card game 'Black-jack'",
    href: "https://richardmattsson.github.io/blackjack2/",
    img: "blackjack.png",
  };
  const weatherApp = {
    name: "WeatherApp",
    href: "https://richardmattsson.github.io/weatherApp/",
    img: "weather.png",
  };

  createProjectLinks(weatherApp);
  createProjectLinks(blackJack);
  createProjectLinks(soccerStats);
  createProjectLinks(ericaPaintings);
  createProjectLinks(shoppingList);

  function createProjectLinks(project) {
    const img = document.createElement("img");
    img.setAttribute("src", project.img);
    img.classList.add("projectImg");
    // const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add("projectLinks");
    // li.textContent = project.name;
    // li.appendChild(img);
    a.setAttribute("href", project.href);
    // a.appendChild(li);
    a.appendChild(img);
    // ul.appendChild(a);
    main.appendChild(a);
  }
}

home.addEventListener("click", () => {
  window.location.href = "index.html";
});
