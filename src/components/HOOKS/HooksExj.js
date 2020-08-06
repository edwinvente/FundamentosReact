import React, {Component, useState} from 'react'

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
            <h1>Example input</h1>
        </div>
    )
}

const App = () => {

    const [clicks, setClicks] = useState(0)
    const [title, setTitle] = useState('Developer Nija in React')

    const handleClick = () =>{
        setClicks(clicks + 1)
    }

    const text = (e) =>{
        setTitle(e.target.value)
    }

    return(
        <div>
            <Header />
            <input 
                value={title}
                type='text'
                onChange={text}
            />
            <button onClick={handleClick}>
                Clicks({clicks})
            </button>
            <h2>
                {title}
            </h2>
        </div>
    )
}

export default App