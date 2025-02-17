const ContactModel = require('../model/ContactModel')

module.exports = class ContactRoute {
  static getContacts (request, response) {
    const contactsArray = ContactModel.getContacts()

    const queryParams = request.query
    const filteredArray = contactsArray.filter(contact => {
      for (const attr in queryParams) {
        if (contact[attr] === undefined || !contact[attr].includes(queryParams[attr].contains)) {
          return false
        }
      }
      return true
    })

    response.send(filteredArray)
  }

  static findContact (request, response) {
    const { id } = request.params
    const contact = ContactModel.findContact(id)
    if (contact) {
      response.send(contact)
    } else {
      response.status(404).send('Contact not found.')
    }
  }

  static addContact (request, response) {
    const { id } = request.body
    const newContact = { ...request.body }
    delete newContact.id
    try {
      ContactModel.addContact(id, newContact)
      response.send(newContact)
    } catch (error) {
      response.status(409).send(error)
    }
  }

  static updateContact (request, response) {
    const { id } = request.params
    const updatedContact = { ...request.body }
    delete updatedContact.id
    try {
      ContactModel.updateContact(id, updatedContact)
      response.send(updatedContact)
    } catch (error) {
      response.status(404).send(error)
    }
  }

  static deleteContact (request, response) {
    const { id } = request.params
    const deleted = ContactModel.deleteContact(id)
    if (deleted) {
      response.status(200).send('deleted')
    } else {
      response.status(404).send('Contact not deleted.')
    }
  }
}
