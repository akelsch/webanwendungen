const { Router } = require('express')
const ContactRoute = require('./routes/ContactRoute')

function random (min, max) {
  return Math.random() * (max - min) + min
}

// delays in milliseconds
const minDelay = 100
const maxDelay = 1500

function delay (req, res, next) {
  setTimeout(next, random(minDelay, maxDelay))
}

module.exports = class APIRouter extends Router {
  constructor (opts = APIRouter.defaultOptions()) {
    super(opts)
    this.use(delay)
    this.get(
      '/',
      (request, response) =>
        response.json({
          name: 'Contact API',
          version: '1'
        })
    )
    this.get(
      '/contacts',
      ContactRoute.getContacts
    )
    this.get(
      '/contacts/:id',
      ContactRoute.findContact
    )
    this.post(
      '/contacts',
      ContactRoute.addContact
    )
    this.put(
      '/contacts/:id',
      ContactRoute.updateContact
    )
    this.delete(
      '/contacts/:id',
      ContactRoute.deleteContact
    )
  }

  static defaultOptions () {
    return {
      caseSensitive: true,
      strict: true
    }
  }
}
