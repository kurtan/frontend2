const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path=require('path')
//const firebase=require('./firebase.js')

//app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'build')));

/* app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
}); */
app.post("/person", function (req, res) {
    var data = req.body
    console.log(data)
     firebase.insert(data)
    res.send("OK")

})

app.listen(8000)
console.log("lyssnar på port 8000")