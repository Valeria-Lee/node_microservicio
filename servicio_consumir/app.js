const api_prefix = "http://localhost:4000";

function fetchContacts() {
    fetch(`${api_prefix}/api/`)
        .then(response => response.json())
        .then(data => {
            const contactList = document.getElementById('contact-list');
            const noContactsMessage = document.getElementById('no-contacts-message');
            
            contactList.innerHTML = '';

            if (Object.keys(data.contacts).length === 0) {
                noContactsMessage.classList.remove('d-none')
            } else {
                noContactsMessage.classList.add('d-none')
                Object.entries(data.contacts).forEach(([id, contact]) => {
                    const contactItem = document.createElement('p')
                    contactItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                    contactItem.innerHTML = `
                        ${contact.firstname} ${contact.lastname} <br> 
                        ${contact.email} <br>
                        ${contact.phone} <br>
                        <button class="btn btn-danger" onclick="deleteContact('${id}')">Delete</button>
                    `
                    contactList.appendChild(contactItem)
                })
            }
        })
        .catch(error => console.error('Error fetching contacts:', error));
}

// Agrega un nuevo contacto
document.getElementById('add-contact-form').addEventListener('submit', function(event) {

    const newContact = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    fetch(`${api_prefix}/api/new-contact/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
    })
    .then(response => response.json())
    .then(data => {
        fetchContacts()
    })
    .catch(error => console.error('Error adding contact:', error))
})

function deleteContact(contactId) {
    fetch(`${api_prefix}/api/delete-contact/${contactId}`, {
        method: 'DELETE', 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error eliminando a un contacto.')
        }
        return response.json()
    })
    .then(data => {
        console.log(data.message)
        fetchContacts()
    })
    .catch(error => {
        console.error('Error eliminando a un contacto:', error);
    })
}

// Para que cuando inicie esten ya los contactos existentes cargados.
window.onload = function() {
    fetchContacts()
}