//map variable
let yelpMap = L.map("map-Container").setView([44.1926, -72.7798], 11.49);
//tile code
L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution:
    '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(yelpMap);

//restaurant markers
let smokehouseMarker = L.marker([44.180628, -72.840141]).addTo(yelpMap);
let pitcherinnMarker = L.marker([44.114933, -72.854628]).addTo(yelpMap);
let hydeawayMarker = L.marker([44.183717, -72.871269]).addTo(yelpMap);
let americanflatbreadMarker = L.marker([44.172555, -72.833974]).addTo(yelpMap);
let canteencreemeeMarker = L.marker([44.1845781, -72.835309]).addTo(yelpMap);
let lawsonsMarker = L.marker([44.187801, -72.835163]).addTo(yelpMap);

//Pop up Icons
smokehouseMarker.bindPopup(`<a href="/localfolk-smokehouse">LocalFolk-Smokehouse</a>`);
pitcherinnMarker.bindPopup(`<a href="/pitcher-inn">The Pitcher Inn</a>`);
hydeawayMarker.bindPopup(`<a href="/hyde-away">The Hyde Away</a>`);
americanflatbreadMarker.bindPopup(`<a href="/american-flatbread">American Flatbread</a>`);
canteencreemeeMarker.bindPopup(`<a href="/canteen-creemee">Canteen Creemee Company</a>`);
lawsonsMarker.bindPopup(`<a href="/lawsons-finest">Lawson's Finest Liquids</a>`);

//navBar restaurant fetch
let navbar = document.getElementById("nav-links");
fetch("./api/restaurants")
  .then((res) => {
    return res.json();
  })
  .then((allNames) => {
    allNames.forEach((restaurant) => {
      let resid = restaurant.id;
      let resname= restaurant.name;
      console.log(resname);

      let anchor = document.createElement("a");
      let listName = document.createElement("li");
      anchor.href = "/" + resid;
      listName.textContent = restaurant.name;
      navbar.appendChild(anchor)
      anchor.appendChild(listName);
    });
  });


//navbar function- Stopped working after I did more on the page, can't seem to find the problem unfortunately. Worked nicely at first
const navSlide = () => {
  //grabbing elements and individual nav links for animation
  const burger = document.querySelector(".burger");
  const nav = document.getElementById("nav-links");
  const navLinks = document.getElementById("nav-links li");
  //burger icon click listener click to toggle
  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    //animate links to come in on
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1.2
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
