
require('dotenv').config()
const express= require('express')
const app= express()
const massive= require('massive')
const {CONNECTION_STRING, SERVER_PORT}= process.env
const databaseCtrl= require('./controllers/databaseCtrl')
const cors= require('cors')
app.use(express.json())
app.use(cors())

massive(CONNECTION_STRING).then(db=> {
  app.set('db', db)

  console.log('database working')
})
app.listen(SERVER_PORT, ()=> console.log('listening on ', SERVER_PORT))

//get works
app.get('/api/houses', databaseCtrl.getHouses)
//post works
app.post('/api/houses', databaseCtrl.addHouse)

//delete working

app.delete('/api/houses/:id', databaseCtrl.deleteHouse)


