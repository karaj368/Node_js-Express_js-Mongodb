import express from "express"
const app = express()
import ContactsRoutes from './routes/contacts.routes.js'
import { connectdb } from './config/database.js'
const port = 3000

//Database Connections
connectdb()

// Middlewares Use //
app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

// Routes //
app.use("/", ContactsRoutes)

app.listen(port, () => {
    console.log(`Server running Successfully on port ${port}.`);
})
