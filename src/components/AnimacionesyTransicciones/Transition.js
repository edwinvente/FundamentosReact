import React, {useState} from 'react'
import './animaciones.css'

const Header = ({ show }) => {
  
    const clases = show 
    ? 'header header-active' 
    : 'header'

    return (
      <header className={clases}>
        <h1>
          Transiciones CSS en linea
          <span role='img' aria-label='fire'>
            🔥
          </span>
        </h1>
      </header>
    )
  }

const App = () =>{

    const [show, setShow] = useState(false)

    const handleChange = () => setShow(!show)

    return(
        <div>
            <button onClick={handleChange}>
                {show ? 'Desactivar' : 'Activar'}
            </button>
            <Header show={show}/>
        </div>
    )
}

export default App