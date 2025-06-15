import express from "express"
const app = express()
import mongoose from "mongoose"

import contactdb from './models/contacts-models.js'
const port = 3000

//Database Connections
mongoose.connect('mongodb://127.0.0.1:27017/contacts-crud')
    .then(() => console.log("Database Connected Successfully"))

// Middlewares Use //
app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

// Routes //

app.get('/', async (req, res) => {
    const contacts = await contactdb.find()
    res.render('index', { contacts })
})

app.get('/show-contact/:id', async (req, res) => {
    const contact = await contactdb.findById(req.params.id)
    res.render('show-contact', { contact })
})

app.get('/add-contact', (req, res) => {
    res.render('add-contact')
})

app.post('/add-contact', async (req, res) => {
    await contactdb.create(req.body)
    res.redirect("/")
})

app.get('/update-contact/:id', async (req, res) => {
    const contact = await contactdb.findById(req.params.id)
    res.render('update-contact', { contact })
    // res.render('update-contact')
})

app.post('/update-contact/:id', async (req, res) => {
    const contact = await contactdb.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/")

})

app.get('/delete-contact/:id', async (req, res) => {
    const contact = await contactdb.findByIdAndDelete(req.params.id)
    res.redirect("/")
})

// Sign Up Form DB
app.get('/signup-form', (req, res) => {
    res.render('formsign', { message: null })
})
app.post('/signup-form', async (req, res) => {
    const { full_name, email, password, checkbox } = req.body
    const message = 'Your Form is Submitted Successfully'
    await contactdb.create(req.body)
    res.render('formsign', { message: message })
})

app.listen(port, () => {
    console.log(`Server running Successfully on port ${port}.`);
})
