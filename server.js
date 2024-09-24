const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/about', (req, res)=>{
    res.render('about');
})
app.get('/contact', (req, res)=>{
    const contact = {
        "name":"Dulce Gamez Sanchez",
        "email":"gamez.dulce.1dm@gmail.com",
        "phone":"4611837450",
        "address":"La Laja"
    }
    res.render('contact', {contact:contact});
})

app.listen(port, () => console.log(`example app listening on port ${port}!`));