const http = require('http');
const fs = require('fs')
const path = require('path')



//create a server
http.createServer(function (req, res) { 
    // file path
    let filePath = path.join(__dirname, req.url == '/' ? 'index.html' : req.url)
    // extension of file
    let ext = path.extname(filePath)
    let contenType = 'text/html' //initialize content-type
    switch(ext) {
        case '.js' :
            contenType = 'text/javascript'
            break
        case '.css' :
            contenType = 'text/css'
            break                
    }
    fs.readFile(filePath, (error , data)=>{  
        if (error) {
            //ENOENT: no such file or directory
            if (error.code == 'ENOENT') {
                res.write('Page Not Found!')
                res.end() 
            }
            else {
                res.write(`There is an Error: ${error.code}`)
                res.end()
            }
        }
        res.setHeader('Content-Type', contenType);
        res.end(data)
    });
 
}).listen(3000); // The server listens on port 3000