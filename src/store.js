import {createStore} from 'redux'

let initialState= {
  name:'',
  address:'did it work', 
  city: '', 
  state: '', 
  zip: 0,
  img: '' ,
  mortgage: 0, 
  rent:0, 



}


//

export const PROP_NAME_CHANGE= 'PROP_NAME_CHANGE'
export const ADDRESS_CHANGE= 'ADDRESS_CHANGE'
export const CITY_CHANGE= 'CITY_CHANGE'
export const STATE_CHANGE= 'STATE_CHANGE'
export const ZIP_CHANGE= 'ZIP_CHANGE'
export const IMG_CHANGE= 'IMG_CHANGE'
export const MORTGAGE_CHANGE= 'MORTGAGE_CHANGE'
export const RENT_CHANGE= 'RENT_CHANGE'


function reducer(state=initialState, action){
  let {type, payload}=action
  
  switch(type){

case PROP_NAME_CHANGE: 
return  {...state, name:payload }

case ADDRESS_CHANGE:
return {...state, address:payload}

case CITY_CHANGE:
return {...state, city:payload}

case STATE_CHANGE:
return {...state, state:payload}

case ZIP_CHANGE:
return {...state, zip:payload}

case RENT_CHANGE:
return {...state, rent:payload}

case IMG_CHANGE:
return {...state, img:payload}

case MORTGAGE_CHANGE: 
return {...state, mortgage:payload}




 default:
    return state
  }
}




export default createStore(reducer)
