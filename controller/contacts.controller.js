import contactdb from '../models/contacts.models.js'

export const getContacts = async (req, res) => {
    const contacts = await contactdb.find()
    res.render('index', { contacts })
}

export const showContacts = async (req, res) => {
    const contact = await contactdb.findById(req.params.id)
    res.render('show-contact', { contact })
}

export const addContactsPage = (req, res) => {
    res.render('add-contact')
}

export const addContacts = async (req, res) => {
    await contactdb.create(req.body)
    res.redirect("/")
}

export const updateContactsPage = async (req, res) => {
    const contact = await contactdb.findById(req.params.id)
    res.render('update-contact', { contact })
    // res.render('update-contact')
}

export const updateContacts = async (req, res) => {
    const contact = await contactdb.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/")

}

export const deleteContacts = async (req, res) => {
    const contact = await contactdb.findByIdAndDelete(req.params.id)
    res.redirect("/")
}

