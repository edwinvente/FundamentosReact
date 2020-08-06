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
            <h1>Use Effect</h1>
        </div>
    )
}

const App = () =>{
    
   const [clicks, setClicks] = useState(0)

   useEffect(() => {
       //componentDidMount
       //componentDidUpdate
       console.log('use effect clicks', clicks)
       console.log('%c-------------', 'color:green')

       //componentWillUnmount
       return () => {
            console.log('Return de use effect clicks', clicks)
       }

   })

   const Add = () => (setClicks(clicks + 1))
    
    return(
        <div>
            <Header />
            <button onClick={Add}>
                Click({clicks})
            </button>
        </div>
    )
}

export default App