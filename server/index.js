
require('dotenv').config()
const express= require('express')
const app= express()
const massive= require('massive')
const {CONNECTION_STRING, SERVER_PORT}= process.env
const databaseCtrl= require('./')

app.use(express.json())


massive(CONNECTION_STRING).then(db=> {
  app.set('db', db)

  console.log('database working')
})


app.get('/api/houses', databaseCtrl.getHouses)

app.listen(SERVER_PORT, ()=> console.log('listening on ', SERVER_PORT))


