const { error } = require('console');
const request = require('postman-request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=8c436b5f79b84cac9cf114417242004&q='+ latitude +','+ longitude + '&aqi=no' 

    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.error) {
            callback('Unable to find location. Try another search', undefined)
        }
        else {
            const { condition, temp_c, feelslike_c } = body.current;
            callback(undefined, condition.text + '. It is currently '+ temp_c +' degrees out. It feels like '+ feelslike_c + ' degrees out')
        }
    })
}

module.exports = forecast