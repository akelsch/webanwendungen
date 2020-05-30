const axios = require('axios')

const requests = [
  {
    method: 'get',
    url: 'contacts'
  },
  {
    method: 'post',
    url: 'contacts',
    newContact: {
      id: '100',
      firstName: 'Alan',
      lastName: 'Turing'
    }
  },
  {
    method: 'post',
    url: 'contacts',
    newContact: {
      id: '101',
      firstName: 'Dermot',
      lastName: 'Turing'
    }
  },
  {
    method: 'get',
    url: 'contacts/100'
  },
  {
    method: 'get',
    url: 'contacts?firstName[contains]=r'
  },
  {
    method: 'get',
    url: 'contacts?firstName[contains]=r&lastName[contains]=ring'
  },
  {
    method: 'delete',
    url: 'contacts/1'
  },
  {
    method: 'get',
    url: 'contacts'
  }
]
