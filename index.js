const express = require("express");
const cors = require("cors");

const app = express();

//midleware functions 
app.use(cors());

app.get('/', (req, res) => {
    res.json("HOlA! This is my server! ");
})

app.get('/api/books', (req, res) => {
    let books = {
        title: "A Court of Thorns and Roses",
        author: "Sarah J. Mass", 
        format: "Kindle"}
    
        res.json(books);
})

const PORT = 1978;

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));