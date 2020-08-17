import { combineReducers } from 'redux'
import counter from './Counter'
import user from './User'

export default combineReducers({
    counter,
    user: user
})