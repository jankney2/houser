import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, { PROP_NAME_CHANGE, ADDRESS_CHANGE, CITY_CHANGE, STATE_CHANGE, ZIP_CHANGE, RESET } from '../store'


export default class Wizard extends Component {

  constructor() {
    super()
    let reduxState = store.getState()

    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip,
      nameInput: '',
      addressInput: '',
      cityInput: '',
      stateInput: '',
      zipInput: ''
    }
  }


  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState(reduxState)
    })

  }

  //   changeHandler = (e) => {

  //     let {name}= e.target
  //     console.log(name)
  //     this.setState({
  // [name]: e.target.value
  //     })
  //}




  render() {

    var changeHandler = function (e) {
      let { name } = e.target
      this.setState({
        [name]: e.target.value
      })
    }.bind(this)



    return (
      <div className="content">

        <div className="topHolder">
          <h1>Add New Listing</h1>

          <Link to='/' onClick={() => {
            store.dispatch({
              type: RESET
            })
          }}>

            <button>Cancel</button>
          </Link>
        </div>


        <div className="inputHolder">
          <input name='nameInput' placeholder="property name" type="text" onChange={(e) => {
            changeHandler(e)
            store.dispatch({
              type: PROP_NAME_CHANGE,
              payload: this.state.nameInput
            })
          }} />

          <input type='text' name='addressInput' placeholder="Address" onChange={(e) => {
            changeHandler(e)
            store.dispatch({
              type: ADDRESS_CHANGE,
              payload: this.state.addressInput
            })
          }} />

          <input type='text' name='cityInput' placeholder="city" onChange={(e) => {
            changeHandler(e)
            store.dispatch({
              type: CITY_CHANGE,
              payload: this.state.cityInput
            })
          }}

          />

          <input type='text' name='stateInput' placeholder="state" onChange={(e) => {
            changeHandler(e)
            store.dispatch({
              type: STATE_CHANGE,
              payload: this.state.stateInput
            })
          }} />

          <input type='text' name='zipInput' placeholder="zip" onChange={(e) => {
            changeHandler(e)
            store.dispatch({
              type: ZIP_CHANGE,
              payload: this.state.zipInput
            })
          }} />
        </div>

        <div className='buttonHolder'>
          {/* <Link to='/'>
            <button style={{
              backgroundColor: ""
            }}>Previous Step</button>
          </Link> */}

          <Link to='/wizard2'>
            <button style={{
              position:"relative", 
              left:"77%"
            }}>Next Step</button>
          </Link>
        </div>
      </div>
    )
  }
}


