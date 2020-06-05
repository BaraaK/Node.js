const fs = require("fs")
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/',(req,res)=>{
    res.end('Blog post website')
    res.set('Content-Type', 'text/plain')
    res.status(200)
})

// add new blog
app.post('/blogs', (req, res) => { 
    const title = req.body.title
    const content = req.body.content
    fs.writeFileSync(title, content);
    res.set('Content-Type', 'text/plain')
    res.status(201).send(`created successfully the file " ${title} "`)
})

// update existing blog
app.put('/blogs', (req, res) => {
    const title = req.body.title
    const content = req.body.content
    if(fs.existsSync(`${title}`)) {
        fs.writeFileSync(title, content);
        res.set('Content-Type', 'text/plain')
        res.status(200).send('updated successfully')
        } 
    else {
        res.set('Content-Type', 'text/plain')
        res.status(404).send(`Sorry, we cannot find that file "${title}"!`)
}
})

//delete blog
app.delete('/blogs/:title', (req, res) => {
    title = req.params.title
    if (fs.existsSync(`${title}`)) { 
        fs.unlinkSync(title);
        res.end(`the file with title " ${title} " was deleted`);
        }
    else {
        res.set('Content-Type', 'text/plain')
        res.status(404).send(`Sorry, we cannot find that file "${title}"!`)    }
})

//read blog
app.get('/blogs/:title', (req, res) => {
    title = req.params.title
    if (fs.existsSync(`${title}`)) {
        res.sendFile(`${__dirname}/${title}`)
        res.status(200)
    }
    else {
        res.set('Content-Type', 'text/plain')
        res.status(404).send(`Sorry, we cannot find that file "${title}"!`) 
    } 
})
app.listen(PORT,()=> console.log(`Server started on port : ${PORT}`))