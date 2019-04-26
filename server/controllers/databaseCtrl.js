module.exports= {

  getHouses: (req, res) => {
    let dbInstance= req.app.get('db')

    dbInstance.get_houses().then((response)=> {
      res.status(200).send(response)
    }).catch(err=> res.status(404).send(err))

  }, 
  addHouse: (req, res)=> {
    let dbInstance=req.app.get('db')
    let {name, address, city, state, zip, img, mortgage, rent} = req.body

    dbInstance.add_house([name, address, city, state, zip, img, mortgage, rent]).then(response=> {
      res.status(200).send(response)
    }).catch(err=> res.status(500).send(err))
  },

  deleteHouse: (req, res)=> {
    let dbInstance=req.app.get('db')
    let {id}= req.params
    dbInstance.delete_house([id]).then(response=>{
      res.status(200).send(response)
    }).catch(err=>res.status(500).send(err))

  }

}