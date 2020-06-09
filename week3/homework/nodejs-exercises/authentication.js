const nodeFetch = require('node-fetch')

async function getBook () {
    try {
        const response = await nodeFetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', 
        {
            headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' 
        }
          });
        const json =  await response.json()
        console.log(json) 
        
    } 
    catch (error) {
        console.error(error)
    }
}
getBook()
