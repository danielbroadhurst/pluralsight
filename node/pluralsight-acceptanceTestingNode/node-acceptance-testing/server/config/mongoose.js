'use strict'

const mongoose = require('mongoose')

module.exports = function (config, env) {
  mongoose.connect(config.db, { useNewUrlParser: true,  })

  const db = mongoose.connection
  db.on('error', function (err) {
    console.log('connection error...', err)
  })
  db.once('open', function () {
    console.log('connected to database.')
  })
}