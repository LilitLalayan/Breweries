const search = document.getElementById("search");
const city = document.getElementById("city");
const result = document.getElementById("result");
let a = document.getElementsByTagName("a");

search.addEventListener("click", getBrewery);
city.addEventListener("keydown", onKeyDown);

async function getBrewery() {
  if (result.hasChildNodes(a)) {
    result.removeChild(a);
  }
  let res = await fetch(
    "https://api.openbrewerydb.org/breweries/search?query=dog"
  );
  let breweries = await res.json();
  console.log(breweries);
  let myBrew = breweries.filter((item) => item.city === city.value);
  myBrew.forEach((el) => {
    a = document.createElement("a");
    a.href = el.website_url;
    a.append(el.name);
    result.append(a);
  });
}

async function onKeyDown(e) {
  if (e.key === "Enter") {
    let res = await fetch(
      "https://api.openbrewerydb.org/breweries/search?query=dog"
    );
    let breweries = await res.json();
    console.log(breweries);
    let myBrew = breweries.filter((item) => item.city === city.value);
    myBrew.forEach((el) => {
      a = document.createElement("a");
      a.href = el.website_url;
      a.append(el.name);
      result.append(a);
    });
  }
}
