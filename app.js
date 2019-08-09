//Requires
const place = require('./place/place');
const weather = require('./weather/weather');


const argv = require("yargs").options({
    direction: {
        alias: "d",
        description: "Addres of the city to get the weather",
        demand: true
    }
}).argv;

/* place.getPlaceLatLng(argv.direction)
    .then(console.log)
    .catch(console.log); */

/* weather.getWeather(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(direction) => {

    try {

        const coordinates = await place.getPlaceLatLng(direction);
        const temperature = await weather.getWeather(coordinates.latitude, coordinates.longitude);

        return `The weather of ${coordinates.direction} is ${temperature}`;

    } catch (error) {

        return `The weather of ${coordinates.direction} can not be getted`;
    }
};

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log);