import React, {useState, useEffect} from 'react'
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

const SpecialButton = Styled(Button)`
    color:gray;
    transition: all 300ms ease-out;

    &:hover{
        transform:scale(1.3);
    }

`

const Move = ({className}) => {
    
    const [mouseX, setMouseX] = useState(0)
    
    const handleMove = (e) => {
        setMouseX(e.clientX)
    }

    useEffect(() => {
        
        window.addEventListener('mousemove', handleMove)

        return () => {
            window.removeEventListener('mousemove', handleMove)
        }
    }, [])

    return(
        <dvi className={className}>
            {mouseX}
        </dvi>
    )   
}

const MoveStyled = Styled(Move)`
    background:yellow;
    font-size:30px;
    height: 200px;
    text-align:center;
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
            <SpecialButton>
                New Button
            </SpecialButton>
            <MoveStyled />
        </div>
    )
}

export default App