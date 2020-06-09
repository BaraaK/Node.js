const nodeFetch = require('node-fetch')
const reservation = {
                    name: "John Doe",
                    numberOfPeople: 7
                    }

async function makeReservation () {
    try {
        const response = await nodeFetch('https://reservation100-sandbox.mxapps.io/api/reservations', {
            method: 'post',
            body:   JSON.stringify(reservation) ,
            headers: { 'Content-Type': 'application/json' },
        })
        if(response .status !== 200) 
            return console.log(`There is an error : ${response.status}  ${response.statusText}`)
        console.log(response)
    } 
    catch (error) {
        console.error(error)
    }
}
makeReservation()