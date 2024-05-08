console.log('client side Javascript is loaded')


const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/India.json?country=in&types=country&language=en&access_token=pk.eyJ1Ijoia3NwYW5kYW5hIiwiYSI6ImNsdjg0Y2k0ZDBmMDcyaW50ZXp4ZGI3bzAifQ.15XrRkYExR4EG_blwYQo6g' 


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.getElementById('message-one')
const messageTwo = document.getElementById('message-two')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
        console.log(response)
        response.json().then((data) => {
            if(data.error) {
                console.log(data.error)
                messageOne.textContent = data.error
            }
            else {
                console.log(data.location)
                console.log(data.forecast)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
            
        }).catch(console.error)
    }).catch((error) => {
        console.log(error)
    })
})