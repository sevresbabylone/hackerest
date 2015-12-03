const express = require('express')
const app = express()
const mongo = require('mongodb').MongoClient

const dbUri = 'mongodb://' +
  process.env.MDB_USR + ':' +
  process.env.MDB_PWD + '@ds061954.mongolab.com:61954/hackerest'

mongo.connect(dbUri, (err, db) => {
  if (err) throw err
  console.log('connected')
  db.close()
})

app.get('/', (req, res) => {
  res.send('root')
})

module.exports = app
