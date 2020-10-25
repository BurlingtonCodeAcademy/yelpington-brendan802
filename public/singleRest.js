let navbar = document.getElementById("nav-links");

fetch("./api/restaurants")
  .then((res) => {
    return res.json();
  })
  .then((allNames) => {
    allNames.forEach((restaurant) => {
      let resname = restaurant.name;
    //   console.log(resname);

      let anchor = document.createElement("a");
      let listName = document.createElement("li");
      anchor.href = "restaurant.html#" + resname;
      listName.textContent = restaurant.name;
      navbar.appendChild(anchor);
      anchor.appendChild(listName);
    });
  });

//Leaflet Map
let yelpMap = L.map("map-Container").setView([44.1926, -72.7798], 11.49);
//tile code
L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(yelpMap);

//pins
let lat = 44.180628;
let long = -72.840141;
let linkName
let restaurantName

let restaurantMarker = L.marker([lat, long]).addTo(yelpMap);
restaurantMarker.bindPopup(`<a href=${linkName}>${restaurantName}</a>`);

    fetch("./api/:id")
    .then((res) => {
        return res.json();
    })
    .then((resId) => {
        console.log(resId)
    })