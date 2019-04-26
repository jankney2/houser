import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store, {RENT_CHANGE, MORTGAGE_CHANGE, RESET} from '../store'


export default class Wizard3 extends Component{
  

constructor() {
  super()
  let reduxState= store.getState()
  this.state= {
    rentInput:'', 
    mortgageInput:'', 
    rent: reduxState.rent, 
    mortgage: reduxState.mortgage
  }
}
  
componentDidMount() {
  store.subscribe(() => {
    const reduxState = store.getState()
    this.setState(reduxState)
  })

}

changeHandler = (e) => {

  let {name}= e.target
  console.log(name)
  this.setState({
[name]: +e.target.value
  })
}

  render(){
    return(
      <div className="content">
     
     <div>
       <h1>Add New Listing</h1>
       
       <Link to='/' onClick={()=>{
            store.dispatch({
              type: RESET
            })
          }}>
       <button>Cancel</button>
       </Link>
     </div>
      <h1>Recommended Rent: {this.state.mortgageInput *1.25} </h1>
      Monthly Mortgage Amount


      <input name='mortgageInput' type="number" placeholder="mortgage" onChange={(e)=>{
        this.changeHandler(e)
        store.dispatch({
          type:MORTGAGE_CHANGE, 
          payload:this.state.mortgageInput
        })
      }}/>


      Desired Monthly Rent
      <input name='rentInput' type="number" placeholder="rent" onChange={(e)=>{
        this.changeHandler(e)
        store.dispatch({
          type:RENT_CHANGE, 
          payload:this.state.rentInput
        })
      }}/>
      
    
     
{/* does post request on click */}
      
      <Link to='/'>
      <button onClick={()=>{
        let reduxState=store.getState()

        axios.post('http://localhost:8877/api/houses', reduxState).then(()=>{
          this.setState({
            rentInput:0, 
            mortgageInput:0
          })
        })



      }}>Create Listing</button>
      </Link>
      
      </div>
    )
  }
}


