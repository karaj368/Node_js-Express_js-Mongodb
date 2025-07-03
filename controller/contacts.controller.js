import contactdb from '../models/contacts.models.js'
import mongoose from 'mongoose'

export const getContacts = async (req, res) => {
    const contacts = await contactdb.find()
    res.render('index', { contacts })
}

export const showContacts = async (req, res) => {
    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.render('404',  {message: "invalid ID."})
    }
    try{
        // Find the contact by ID
        const contact = await contactdb.findById(req.params.id);
        // If contact not found, render 404 page
        if (!contact) { return res.render('404', {message: "Contact not found."});}
        res.render('show-contact', { contact });
    }
    catch (error) {
        // If there's an error during the find operation, render 500 page
        res.render('500', { message: error});
    }
}

export const addContactsPage = (req, res) => {
    res.render('add-contact')
}

export const addContacts = async (req, res) => {
    await contactdb.create(req.body)
    res.redirect("/")
}

export const updateContactsPage = async (req, res) => {

     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.render('404', { message: "Invalid ID." });
    }
    try{
        // Check if the contact exists
       const contact = await contactdb.findById(req.params.id)
        if (!contact) {
            return res.render('404', { message: "Contact not found." });
        }
         res.render('update-contact', { contact })
    }
    catch (error) {
        res.render('500', { message: error });
    }
    
   
    // res.render('update-contact')
}

export const updateContacts = async (req, res) => {

     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.render('404', { message: "Invalid ID." });
    }

     try{
        // Check if the contact exists
      const contact = await contactdb.findByIdAndUpdate(req.params.id, req.body)
        if (!contact) {
            return res.render('404', { message: "Contact not found." });
        }
         res.redirect("/")
    }
    catch (error) {
        res.render('500', { message: error });
    }
   
    

}

export const deleteContacts = async (req, res) => {
     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.render('404')
    }

    try{
        // Check if the contact exists
       const contact = await contactdb.findByIdAndDelete(req.params.id)
        if (!contact) {
            return res.render('404', { message: "Contact not found." });
        }
         res.redirect("/")
    }
    catch (error) {
        res.render('500', { message: error });
    }
}

