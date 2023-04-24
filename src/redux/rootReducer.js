import {combineReducers} from 'redux'
import userReducer from './userReducer'
import userDetailsReducer from './userDetailsReducer'
import cityDetailsReducer from './cityDetailsReducer'
import forecastDetailsReducer from './forecastDetailsReducer'

const rootReducer = combineReducers({
    user:userReducer,
    userDetails:userDetailsReducer,
    cityDetails:cityDetailsReducer,
    forecastDetails: forecastDetailsReducer
    
})


export default rootReducer