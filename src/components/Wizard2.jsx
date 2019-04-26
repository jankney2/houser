import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, { IMG_CHANGE } from '../store'


export default class Wizard2 extends Component{
  constructor(){
    super()
    let reduxState= store.getState()

    this.state={
      img: reduxState.img,
      imgInput:''
    }
  }
  
  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState(reduxState)
    })
 
  }
  
  render(){
    return(
      <div className="content">
     
     <div>
       <h1>Add New Listing</h1>
       
       <Link to='/'>
       <button>Cancel</button>
       </Link>
     </div>

      <input name='image URL' placeholder="imgURL" onChange={(e)=>{
        this.setState({
          imgInput:e.target.value
        })
        store.dispatch({
          type: IMG_CHANGE, 
          payload: this.state.imgInput
        })

      }}/>    
     
      <Link to="/wizard3">
      <button>Next Step</button>
      </Link>
      </div>
    )
  }
}


