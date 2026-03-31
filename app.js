const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const articoli = [
    {
        titolo:"",
        
    },
]

app.get('/' , (req, res) => {
    res.send("bevenuti nella home page")
})