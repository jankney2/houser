import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, { IMG_CHANGE, RESET } from '../store'


export default class Wizard2 extends Component {
  constructor() {
    super()
    let reduxState = store.getState()

    this.state = {
      img: reduxState.img,
      imgInput: ''
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState(reduxState)
    })

  }

  render() {
    return (
      <div className="content">

        <div className='topHolder'>
          <h1>Add New Listing</h1>

          <Link to='/' onClick={() => {
            store.dispatch({
              type: RESET
            })
          }}>
            <button>Cancel</button>
          </Link>
        </div>

        <input className='soloInput' name='image URL' placeholder="imgURL" onChange={(e) => {
          this.setState({
            imgInput: e.target.value
          })
          store.dispatch({
            type: IMG_CHANGE,
            payload: this.state.imgInput
          })

        }} />


        <div className='buttonHolder'>
          <Link to='/wizard'>
          <button style={{
            backgroundColor: ""
          }}>Previous Step</button>
        </Link>

          <Link to="/wizard3">
            <button>Next Step</button>
          </Link>
          </div>


      </div>
    )
  }
}


