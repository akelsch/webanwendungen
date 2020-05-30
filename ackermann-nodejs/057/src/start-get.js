const superagent = require('superagent')

superagent
  .get('http://localhost:3000/api/v1/contacts')
  .end((error, response) => {
    if (error) {
      console.error(error)
    } else {
      const contacts = response.body
      console.log('-1-')
      contacts.forEach((contact) => {
        console.log(contact)
      })
    }
  })

superagent
  .get('http://localhost:3000/api/v1/contacts')
  .end((error, response) => {
    if (error) {
      console.error(error)
    } else {
      const contacts = response.body
      console.log('-2-')
      contacts.forEach((contact) => {
        console.log(contact)
      })
    }
  })
