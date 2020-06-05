const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
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


//index route
app.get('/', (req,res) => {
  res.render('index') 
})

app.post('/weather',(req,res)=>{
  const city = req.body.cityName
  res.status(200)
  res.set('Content-Type', 'text/plain')
  res.end(city)
})


app.listen(PORT,()=>console.log(`The server starts on port : ${PORT}`))