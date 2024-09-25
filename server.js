const express = require('express')
var expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.static('public'))
app.set('layout', './layouts/main')

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

app.get('/services',(req, res)=>{
    const services=[
        {
         "name":"web design",
         "description":"bla bla bla...",
         "price":"$5744",

        },
         {
         "name":"Networking design",
         "description":"bla bla bla...",
         "price":"$5744",

        },
         {
         "name":"Server administration",
         "description":"bla bla bla...",
         "price":"$5744",

        },
    ]
    res.render('services',{services : services})
})

app.listen(port, () => console.log(`example app listening on port ${port}!`));