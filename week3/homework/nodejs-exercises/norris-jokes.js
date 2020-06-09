const nodeFetch = require('node-fetch')


async function getNorrisJoke () {
    try {
        const response = await nodeFetch('http://api.icndb.com/jokes/random')
        const json = await response.json()
        return json.value.joke
    } 
    catch (error) {
        console.error(error)
    }
}

getNorrisJoke().then(joke => console.log(`This is a joke from norris-jokes API : \n ${joke}`))