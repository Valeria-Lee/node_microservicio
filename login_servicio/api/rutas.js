const { Router } = require('express')
const router = Router()
const admin = require('firebase-admin')

require('dotenv').config()

var serviceAccount = require("../node-firebase-example-b3c97-firebase-adminsdk-4axpt-a624550d5a.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.DB_URL
})

const db = admin.database()

router.get('/', (req, res) => {
    db.ref('/').once('value', (snapshot) => {
        const data = snapshot.val();
        res.json(data);
    }).catch((err) => {
        res.status(500).json({ error: 'Error obteniendo los datos', message: err.message });
    })
})

router.post('/new-contact', (req,res) =>{
    console.log(req.body)
    const newContact = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    }
    db.ref('contacts').push(newContact)
})

router.delete('/delete-contact/:id', (req, res) => {
    const contactId = req.params.id;
    
    db.ref('/contacts/' + contactId).remove()
        .then(() => {
            res.status(200).json({ message: `Contact with ID ${contactId} deleted successfully.` })
        })
        .catch((error) => {
            res.status(500).json({ error: 'Failed to delete contact', message: error.message })
        })
});

module.exports = router