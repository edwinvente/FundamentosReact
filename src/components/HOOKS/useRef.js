import React, {useRef} from 'react'

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
            Use ref
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

const App = () => {
 
    const entrada = useRef()

    const focus = () => entrada.current.focus()
    const blur = () => entrada.current.blur()
    
    return(
        <div>
            <Header />
            <input 
                type='text'
                ref={entrada}
            />
            <button onClick={focus}>
                Focus
            </button>
            <button onClick={blur}>
                Blur
            </button>
        </div>
    )
}

export default App