var http = require('http');
const fs = require('fs')


//create a server
let server = http.createServer(function (req, res) {
    let path = req.url
    if(path === '/') {
        fs.readFile('index.html', (error , data)=>{  
            if (error)
                return console.log(error)
          res.setHeader('Content-Type', 'text/html');
          res.end(data) // Ends the response
        }); 
    }
    else
        if(path === '/script.js') {
            fs.readFile('script.js', (error , data)=>{  
                if (error)
                    return console.log(error)
            res.setHeader('Content-Type', 'text/javaScript');
            res.end(data) // Ends the response
            }); 
        }
    else
        fs.readFile('style.css', (error , data)=>{  
            if (error)
                return console.log(error)
          res.setHeader('Content-Type', 'text/css');
          res.end(data) // Ends the response
        }); 
    
  
});

server.listen(3000); // The server listens on port 3000