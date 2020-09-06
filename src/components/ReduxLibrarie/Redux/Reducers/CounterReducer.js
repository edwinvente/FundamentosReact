import { INCREMENT, DECREMENT } from '../Actions/CounterActions'
 
//Reducer
//funcion que nos retorna el estado actual
const initialState = 0

function counter(state = initialState, action){

    switch (action.type) {
        case INCREMENT:
            return state + 1

        case DECREMENT:
            return state - 1
    
        default:
            return state

    }

}

export default counter