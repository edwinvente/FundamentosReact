import React, {useState} from 'react'
import Styled from 'styled-components'

const Header = Styled.header`
    background: linear-gradient(50deg, tomato, lightgreen);
    text-align: center;
    border-radius:0.2em;
    color: #FFF;
    padding:0.3em;
    margin:0.3em;
    font-size: 14px;
`

const Button = Styled.button`
    padding:0.6em 1em;
    background: ${(props) => props.active ? 'purple' : 'black'};
    border-radius: 0.1em;
    color:white;
    border:0;
    margin:0.4em;
`

const App = () => {

    const [active, setActive] = useState(false)

    const toggle = () => setActive(!active)

    return(
        <div>
            <Header>    
                <h1>Styled Components</h1>
            </Header>
            <Button>
                Un boton
            </Button>
            <Button active={active} onClick={toggle}>
                Toogle
            </Button>
        </div>
    )
}

export default App