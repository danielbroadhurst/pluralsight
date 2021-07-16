'use strict'

const LocalService = require('./local-service')

const localService = new LocalService('./server.js')
const config = require('../server/config/config')['test']
const axios = require('axios')

const apiBaseUrl = `http://localhost:${config.port}/api`

before(() => {
  return localService.start()
})

after(() => {
  return localService.kill()
})

function generateAuthCookie(userId) {
  return Promise.resolve({ Cookie: `${config.userCookieName}=${userId}` })
}

module.exports = {
  apiGet(userId, relativeUrl) {

    let headers = { Cookie: `${config.userCookieName}=${userId}` }

    let url = `${apiBaseUrl}/${relativeUrl}`
    return generateAuthCookie(userId).then(headers => {
      return axios.get(url, { headers })
        .then(response => response.data)
    })
  },

  apiPost(userId, relativeUrl, data) {
    let url = `${apiBaseUrl}/${relativeUrl}`

    return generateAuthCookie(userId).then(headers =>
      axios.post(url, data, { headers })
        .then(response => response.data))
  },

  apiDelete(userId, relativeUrl) {
    let url = `${apiBaseUrl}/${relativeUrl}`

    return generateAuthCookie(userId).then(headers =>
      axios.delete(url, { headers })
        .catch(err => console.log("ERROR", err)))
  }
}