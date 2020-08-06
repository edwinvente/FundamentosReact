import React, { useState, useEffect } from 'react'

const Header = () =>{
    const boxStyles = {
        background: 'linear-gradient(20deg, #6813cb, #2575fc)',
        textAlign: 'center',
        borderRadius: '0.2em',
        color: '#FFF',
        padding: '0.3em',
        margin: '0.3em',
        fontSize: '14px'
    }

    return(
        <div style={boxStyles}>
            <h1>Use Effect x and y mouseover</h1>
        </div>
    )
}

const App = () => {
    
    const [clintX, setClintX] = useState(0);
    const [clintY, setClintY] = useState(0);

    const handleMouse = (e) =>{
        setClintX(e.clientX)
        setClintY(e.clientY)
    }

    useEffect(() => {    
        window.addEventListener('mousemove', handleMouse)

        return () => {
            window.removeEventListener('mousemove', handleMouse)
        }
    })

    return(
        <div>
            <Header />
            <h1>
                x:{clintX} - y:{clintY}
            </h1>
        </div>
    )
}

export default App