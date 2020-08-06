import React, {useState, useReducer} from 'react'

const Header = () => {
    const styles = {
      background: 'linear-gradient(20deg, #6813cb, #2575fc)',
      textAlign: 'center',
      borderRadius: '0.2em',
      color: '#FFF',
      padding: '0.3em',
      margin: '0.3em',
      fontSize: '14px'
    }
  
    return (
      <header style={styles}>
        <h1>
          Hook useReducer
          <span
            role='img'
            aria-label='hook emoji'
          >
            ⚓
          </span> 
        </h1>
      </header>
    )
  }

const reducer = (state, action) =>{
    switch (action.type) {
        case 'Increment':
            return {
                ...state,
                clicks: state.clicks + 1
            }
            break;
        case 'Decrement':
            return {
                ...state,
                clicks: state.clicks - 1
            }
            break;

        case 'Set_title':
            return {
                ...state,
                title: action.title
            }
            break;
    
        default:
            return state
            break;
    }
}

const inicialState = {
    clicks:0,
    title:'Hello useReducer'
}

const App = () => {
    
    const [state, dispatch] = useReducer(reducer, inicialState)
    
    const handleInput = (e) =>{
        dispatch({
            type: 'Set_title', 
            title: e.target.value 
        })
    }

    const Increment = () =>{
        dispatch({type: 'Increment'})
    }

    const Decrement = () =>{
        dispatch({type: 'Decrement'})
    }

    return(
        <div>
            <Header />
            <input 
                onChange={handleInput}
                type='text'
                value={state.title}
            /> <br />
            <button onClick={Increment}>
                Increment
            </button>
            <button onClick={Decrement}>
                Decrement
            </button>
            <h3>
                {state.clicks} - {state.title}
            </h3>
        </div>
    )
}

export default App