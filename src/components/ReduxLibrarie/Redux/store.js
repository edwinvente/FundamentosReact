import { createStore } from 'redux'
import rootReducer from './Reducers'

//Store
//almacenamiento de nuestro estado
const store = createStore(rootReducer)

export default store

//store.getState()
//store.dispatch()
//store.subscribe(fun) 