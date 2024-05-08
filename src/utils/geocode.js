const { error } = require('console');
const request = require('postman-request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?country=in&types=country&language=en&access_token=pk.eyJ1Ijoia3NwYW5kYW5hIiwiYSI6ImNsdjg0Y2k0ZDBmMDcyaW50ZXp4ZGI3bzAifQ.15XrRkYExR4EG_blwYQo6g' 

    request({url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(response.body.error) {
            callback('Unable to find location. Try another search', undefined)
        }
        else if(response.body.features.length){
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode