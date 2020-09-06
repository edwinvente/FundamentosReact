import { combineReducers } from 'redux'
import counter from './CounterReducer'
import user from './UserReducer'

export default combineReducers({
    counter,
    user: user
})