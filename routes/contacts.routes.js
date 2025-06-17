import express from "express"
const router = express.Router()

import{
    getContacts,
    showContacts,
    addContactsPage,
    addContacts,
    updateContactsPage,
    updateContacts,
    deleteContacts
    
} from "../controller/contacts.controller.js"

router.get('/', getContacts)

router.get('/show-contact/:id', showContacts)

router.get('/add-contact', addContactsPage)

router.post('/add-contact', addContacts)

router.get('/update-contact/:id', updateContactsPage)

router.post('/update-contact/:id', updateContacts)

router.get('/delete-contact/:id', deleteContacts)

// Sign Up Form DB
router.get('/signup-form', (req, res) => {
    res.render('formsign', { message: null })
})
router.post('/signup-form', async (req, res) => {
    const { full_name, email, password, checkbox } = req.body
    const message = 'Your Form is Submitted Successfully'
    await contactdb.create(req.body)
    res.render('formsign', { message: message })
})

export default router