import React, {useState, useContext} from 'react'

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
          Use Context with Hooks
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

const MyContext = React.createContext()

//forma tradicional
/* const Nieto = () => (
    <MyContext.Consumer>
        {(context) => (
            <div>
                <p>Nieto number {context.clicks} </p>
                <button onClick={context.addClick}>
                    Dispatch nieto
                </button>
            </div>
        )}
    </MyContext.Consumer>
) */

const Nieto = () => {
    
    const {clicks, addClick} = useContext(MyContext)
     
    return(
        <div>
            <p>Nieto number {clicks} </p>
            <button onClick={addClick}>
                Dispatch nieto
            </button>
        </div>
    )
}

const Hijo = () => (
    <div>
        <p>Hijo</p>
        <Nieto />
    </div>
)

const App = () => {

    const [clicks, setClicks] = useState(0)

    const addClick = () => setClicks(clicks + 1)

    return(
        <MyContext.Provider value={{ 
                clicks,
                addClick
             }}
        >
            <div>
                <Header />
                <button onClick={addClick}>
                    click({clicks})
                </button>
                <Hijo />
            </div>
        </MyContext.Provider>
    )
}

export default App