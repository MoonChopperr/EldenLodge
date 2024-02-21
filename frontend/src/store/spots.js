import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import { csrfFetch } from './csrf';

//Constant
const ALL_SPOTS = '/spots/ALL_SPOTS'
const SPOT_DETAILS = '/spots/SPOT_DETAILS'
const CREATE_SPOT = '/spots/CREATE_SPOT'
const UPDATE_SPOT = '/spots/UPDATE_SPOT'
const DELETE_SPOT = '/spots/DELETE_SPOT'

//Action Creators
const loadSpots = (spots) =>{
    return{
        type: ALL_SPOTS,
        spots
    }
}

const spotDetails = (spot)=>{
    return{
        type: SPOT_DETAILS,
        spot
    }
}

const createSpot = (spot)=>{
    return{
        type: CREATE_SPOT,
        spot
    }
}


//Thunks
export const thunkLoadSpots = () => async(dispatch)=>{
    const response = await csrfFetch('/api/spots')

    if(response.ok){
        const data = await response.json()
        console.log('data=>',data)
        dispatch(loadSpots(data))
        return data
    }
}

export const thunkSpotDetails = (spotId) => async(dispatch)=>{
    const response = await csrfFetch(`/api/spots/${spotId}`)

    if(response.ok){
        const spot= await response.json()
        dispatch(spotDetails(spot))
        return spot
    }
}

export const thunkCreateSpot = (spot)=> async(dispatch)=>{
    const response = await csrfFetch('/api/spots',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(spot)
    })

    if(response.ok){
        const spot = await response.json()
        dispatch(createSpot(spot))
        return spot
    }else{
        const error = await response.json()
        return error
    }
}

//Reducers
const spotsReducer = (state = {}, action)=>{
    switch(action.type){
        case ALL_SPOTS:{
            const newState={}
            action.spots.Spots.forEach((spot)=>(newState[spot.id]=spot))
            return newState
        }
        case SPOT_DETAILS:{
            return { ...state, [action.spot.id]: action.spot }
        }
        case CREATE_SPOT:{
            return { ...state, [action.spot.id]: action.spot }
        }
        default:
            return state
    }
}



export default spotsReducer
