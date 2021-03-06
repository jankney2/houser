import React, {Component} from 'react'
import axios from 'axios'




export default class House extends Component{
  render(){
    return(
      <div className="house">
        {/* on click of the button triggers delete */}

<div className="subContainer">        
        <button onClick={()=>{
          axios.delete(`http://localhost:8877/api/houses/${this.props.deleteId}`).then(()=>{
            window.location.reload()
          })

        }}>X</button>
        <img src={this.props.img} alt=""/>
        
        <div>
        <h1>Property Name: {this.props.propName}</h1>
        <h1>Property Address: {this.props.address}</h1>
        <h1>City: {this.props.city}</h1>
        <h1>State: {this.props.state}</h1>
        <h1>Zip: {this.props.zip}</h1>
        </div>

        <div>
          <h1>Monthly Mortgage: {this.props.mortgage}</h1>
          <h1>Desired Rent: {this.props.rent}</h1>
          </div>
        
</div>
      </div>
    )
  }
}


