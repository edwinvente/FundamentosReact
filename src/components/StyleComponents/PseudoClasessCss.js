import React from 'react'
import Styled from 'styled-components'

const Header = Styled.header`
    background: linear-gradient(50deg, tomato, lightgreen);
    text-align: center;
    border-radius:0.2em;
    color: #FFF;
    padding:0.3em;
    margin:0.3em;
    font-size: 14px;
    transition: all 350ms ease-out;
    opacity: 0.5;

    &:hover {
        opacity: 1;
        background: linear-gradient(50deg, lightgreen, tomato);

        h1{
            color:purple;
        }

    }

`

const App = () => {
    return(
        <div>
            <Header>    
                <h1>Pseudo clases Css</h1>
            </Header>
        </div>
    )
}

export default App