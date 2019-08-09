//Requires
const axios = require("axios");

const getPlaceLatLng = async(direction) => {

    const encodeUrl = encodeURI(direction);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'd07d053ae4msh0309173a5ed5abdp129f5fjsnb5bde7318b47' }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`There is not response for ${direction}`);
    }

    const data = response.data.Results[0];
    const auxDirection = data.name;
    const latitude = data.lat;
    const longitude = data.lon;

    /* instance.get()
        .then(response => {
            console.log(response.data.Results[0]);
        })
        .catch(error => {
            console.log(`ERROR ${error}`);
        });
    */

    return {
        direction,
        latitude,
        longitude
    };
};

module.exports = {

    getPlaceLatLng
};