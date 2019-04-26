import React, {Component} from 'react'
import {Link} from 'react-router-dom'



export default class Wizard extends Component{
  render(){
    return(
      <div className="content">
     
     <div>
       <h1>Add New Listing</h1>
       
       <Link to='/'>
       <button>Cancel</button>
       </Link>
     </div>

      <input name='propertyName' placeholder="property name"/>
      <input name='address' placeholder="Address"/>
      <input name='city' placeholder="city"/>
      <input name='state' placeholder="state"/>
      <input name='zip' placeholder="zip"/>
     
    
     

      <button>Next Step</button>
      </div>
    )
  }
}


