const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'

const requests = [
  {
    method: 'get',
    url: 'contacts'
  },
  {
    method: 'post',
    url: 'contacts',
    data: {
      id: '100',
      firstName: 'Alan',
      lastName: 'Turing'
    }
  },
  {
    method: 'post',
    url: 'contacts',
    data: {
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

async function makeRequestsSequentially () {
  for (const request of requests) {
    try {
      const response = await axios(request)
      console.log(JSON.stringify(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }
}

makeRequestsSequentially()
