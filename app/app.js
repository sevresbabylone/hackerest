const express = require('express')
const app = express()
const mongo = require('mongodb').MongoClient

const dbUri = 'mongodb://' +
  process.env.MDB_USR + ':' +
  process.env.MDB_PWD + '@ds061954.mongolab.com:61954/hackerest'

mongo.connect(dbUri, (err, db) => {
  if (err) throw err
  console.log('connected')

  db.collection('items')
    .find()
    .toArray((err, item) => {
      if (err) return err
      console.log(item)
      db.close()
    })
})

app.get('/', (req, res) => {
  // res.send('root')

  mongo.connect(dbUri, (err, db) => {
    if (err) throw err
    console.log('connected')

    db.collection('items')
      .find({}, { _id: 0 })
      .toArray((err, item) => {
        if (err) return err
        // console.log(item)
        res.send(JSON.stringify(item, null, 2))
        db.close()
      })
  })
  // res.json(result)
})

module.exports = app
