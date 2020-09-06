import {UPDATE_NAME} from '../Actions/userActions'

const initialState = {
    name: 'Edwin',
    country: 'Colombia'
}

function user(state = initialState, action){

    console.log(action)

    switch (action.type) {
        case UPDATE_NAME: 
            return {
                ...initialState,
                name: action.payload.name
            }
        
        default:
            return state

    }

}

export default user