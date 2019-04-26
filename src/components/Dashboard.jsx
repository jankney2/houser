import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import House from './House'

export default class Dashboard extends Component {
  
  constructor(){
    super()
    this.state={
      houseList:[]
    }
  }
  

  
  componentDidMount() {
    axios.get('http://localhost:8877/api/houses').then(res=>{
      // console.log('get fired')
      
      this.setState({
        houseList:res.data
      })
    })
  }
  
  render() {

let HouseMap= this.state.houseList.map(el=> {
  return <House key={el.id} img={el.img} propName={el.name} address={el.address} city={el.city} state={el.state} zip={el.zip} deleteId={el.id} />
})

    return (
      <div className="content">
        <div>
          <h1>Dashboard</h1>
          <Link to="/wizard">

            <button>Add New Property</button>
          </Link>

        <section>

          {HouseMap}
        </section>

        </div>
        <br />


      <section>




      </section>

      </div>
    )
  }
}


