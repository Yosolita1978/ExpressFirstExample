const express = require("express");
const cors = require("cors");
const books = require('./books.js')

const app = express();

//midleware functions 
app.use(cors());

app.get('/', (req, res) => {
    res.json("HOlA! This is my server! ");
})

app.get('/api/books', (req, res) => {   
        res.json(books);
})

const PORT = 5000;

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));