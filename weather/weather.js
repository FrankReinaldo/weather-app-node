const axios = require("axios");

const getWeather = async(latitude, longitude) => {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6eeac111e57b12075c5cf727e5b2a784&units=metric`);

    return response.data.main.temp;

};

module.exports = {

    getWeather
};