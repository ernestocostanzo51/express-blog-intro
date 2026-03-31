const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const articoli = [
    {
        titolo: "Il mio primo viaggio in Giappone",
        contenuto: "Un'esperienza incredibile tra tradizione e tecnologia.",
        immagine: "/images/giappone.jpg",
        tags: ["viaggi", "giappone", "avventura"]
    },
    {
        titolo: "Ricetta Torta al Cioccolato",
        contenuto: "Ecco come preparare una torta soffice in 10 minuti.",
        immagine: "/images/torta.jpg",
        tags: ["cucina", "dolci", "ricette"]
    },
    {
        titolo: "Guida a JavaScript ES6",
        contenuto: "Tutto quello che devi sapere sulle nuove funzionalità.",
        immagine: "/images/js-guide.jpg",
        tags: ["programmazione", "web", "js"]
    },
    {
        titolo: "Allenamento a casa",
        contenuto: "5 esercizi semplici per restare in forma senza palestra.",
        immagine: "/images/fitness.jpg",
        tags: ["salute", "fitness", "workout"]
    },
    {
        titolo: "Recensione Film: Dune",
        contenuto: "Un capolavoro visivo che ridefinisce la fantascienza.",
        immagine: "/images/dune.jpg",
        tags: ["cinema", "recensioni", "sci-fi"]
    }
];


app.get('/' , (req, res) => {
    res.send("bevenuti nella home page")
})

app.get('/bacheca' , (req, res) =>{
res.json({
    count : articoli.length
    posts : articoli

})
})