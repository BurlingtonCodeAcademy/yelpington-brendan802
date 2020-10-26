//imports
const fs = require('fs');
const express = require("express")
const bodyParser = require("body-parser")
const app = express();

//global variables
const port = process.env.PORT ||8080;
const path = require("path");
const restaurantDir = path.resolve('./restaurants')

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static('./public'));

//path for index.html
app.get('/', (request, response) => {
    response.sendFile(path.resolve('./public/index.html'))
})

//API endpoint got all restaurants
app.get('/api', (request, response) => {
    let restaurants = allRestaurants();
    let restaurantData = JSON.stringify(restaurants);
    response.type('text/json');
    response.send(restaurantData)
    response.sendFile(path.resolve('./public/restaurants.html'))
});

//single restaurant route json syntax
app.get('/api/:id', (request, response) => {
    let id = request.params.id;
    response.sendFile(path.resolve(`./restaurants/${id}.json`));
})


app.get('/:name', (request, response) => {
    let name = request.params.name;
    response.sendFile(path.resolve(`./public/singleRest.html`))
})

//starts up the server/console log check
app.listen(port, () => {
    console.log(`running on ${port}`)
})

//helper function allrestaurants
function allRestaurants() {
    return fs.readdirSync(restaurantDir)
    .filter(file => file.endsWith('.json'))
    .map(file => JSON.parse(fs.readFileSync(path.join(restaurantDir, file))))
    .sort((a,b)=> (a.id - b.id));
  }