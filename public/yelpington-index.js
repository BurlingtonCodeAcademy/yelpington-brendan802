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
smokehouseMarker.bindPopup("<h3>LocalFolk Smokehouse</h3>");
pitcherinnMarker.bindPopup("<h3>Pitcher Inn & Restaurant</h3>");
hydeawayMarker.bindPopup("<h3>Hyde Away Inn & Restaurant</h3>");
americanflatbreadMarker.bindPopup("<h3>American Flatbread</h3>");
canteencreemeeMarker.bindPopup("<h3>Canteen Creemee Company</h3>");
lawsonsMarker.bindPopup("<h3>Lawson's Finest Liquids</h3>");

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
      anchor.href = "restaurant.html#" + resid;
      listName.textContent = restaurant.name;
      navbar.appendChild(anchor)
      anchor.appendChild(listName);
    });
  });

//navbar function
// const navSlide = () => {
//   //grabbing elements and individual nav links for animation
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");
//   //burger icon click listener click to toggle
//   burger.addEventListener("click", () => {
//     //toggle nav
//     nav.classList.toggle("nav-active");
//     //animate links to come in on
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${
//           index / 7 + 1.2
//         }s`;
//       }
//     });
//     //burger animation
//     burger.classList.toggle("toggle");
//   });
// };

// navSlide();
