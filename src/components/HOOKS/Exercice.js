import React, {Component, useState} from 'react'
import { render } from 'react-dom'

const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
}

const Header = () => (
    <div style={styles}>
        <h1>Active component Hooks</h1>
    </div>
)

const App = () => {
    
    const [isActive, setActive] = useState(false)
    
    const toggle = () =>{
        setActive(!isActive)
    }

    return(
        <div>
            {isActive && <Header />}
            <button onClick={toggle}>
                {isActive ? 'Desactivar' : 'Activar'}
            </button>
        </div>
    )
}

export default App