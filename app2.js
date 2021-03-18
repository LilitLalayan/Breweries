const list = document.getElementById("list");
const cityList = document.getElementsByClassName("cityList");

async function getCityList() {
  try {
    let myCities = [];
    let res = await fetch(
      "https://api.openbrewerydb.org/breweries/search?query=dog"
    );
    let cities = await res.json();

    for (let i = 0; i < cities.length; i++) {
      myCities.push(cities[i].city);
    }
    for (let i = 0; i < myCities.length; i++) {
      let li = document.createElement("li");
      li.append(myCities[i]);
      list.append(li);
    }
  } catch (e) {
    alert(e.message);
  }
}
getCityList();
