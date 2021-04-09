const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {

    return console.log("Please enter a location")
}

geocode(address, (error, { lat, long, location } = {}) => {

    if (error) {
        return console.log("Error", error)
    }

    forecast(lat, long, (error, { description, temp, feelsLike }) => {

        if (error) {
            return console.log('Error', error)
        }

        console.log(location)
        console.log(description + "\n" + "It is " + temp + " out.\n" + "It feels like " + feelsLike)
    })
})