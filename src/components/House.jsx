import React, {Component} from 'react'




export default class House extends Component{
  render(){
    return(
      <div>
        {/* on click of the button triggers delete */}
        <button>X</button>
        <img src={this.props.img} alt=""/>
        <h1>Property Name: {this.props.propName}</h1>
        <h1>Property Address: {this.props.address}</h1>
        <h1>City: {this.props.city}</h1>
        <h1>State: {this.props.state}</h1>
        <h1>Zip: {this.props.zip}</h1>
      </div>
    )
  }
}


