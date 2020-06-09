const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const API_KEY = require('./sources/keys.json').API_KEY;
const axios = require('axios')
const PORT = process.env.PORT || 3000

//Handlebars Middleware
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.use(express.json())

// Body parser Middleware
app.use(bodyParser.json())
//Returns middleware that only parses urlencoded bodies and only 
//looks at requests where the Content-Type header matches the type option
//The extended option allows to choose between parsing the URL-encoded data with
//the querystring library (when false) or the qs library (when true)
app.use(bodyParser.urlencoded({extended : false}))

// set the directory to make css file reachable
app.use(express.static(__dirname))

//index route
app.get('/', (req,res) => {
  res.render('index') 
})

app.post('/weather',(req,res)=>{
  const city = req.body.cityName
  const selectedUnit = req.body.unit // get selected temprature units
  let unitSymbol = '\xB0K' //set the units symbole
  let units ='' // as API documentation when do not set anything, the units will be Kalvin
  
  if (selectedUnit === 'Fahrenheit') {
    unitSymbol = '\xB0F'
    units = 'imperial' 
  } 
  else if (selectedUnit === 'Celsius'){
    unitSymbol = '\xB0C'
    units = 'metric'
  }
    
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${API_KEY}`)
        .then(response=> {
            if(response.status !== 200) {
              return res.render('index', {text : `Sorry, the weather of city "${city}" is NOT found!`})
            }
            res.render('index',{text : `The temprature in ${city} is : ` , cityWeather : response.data.main.temp , unitSym : unitSymbol})
            res.end()
        })
        .catch(error=>{
            res.render('index', {text : `Sorry ther is an error!. Please try again later...`})
        })
})


app.listen(PORT,()=>console.log(`The server starts on port : ${PORT}`))