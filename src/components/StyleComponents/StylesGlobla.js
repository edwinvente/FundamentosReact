import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
        font-family: ${props => props.font};
    }
`

const Header = styled.header`
    background: #db7093;
    text-align:center;
    border-radius: 0.2em;
    color: #FFF;
    padding: 1.3em;
    margin: 0.3em;
    font-size: 16px;
`

const App = () => {
    return(
        <div>
            <GlobalStyle font="'Open Sans', sans-serif"/>
            <Header>
                Stilos Globales
            </Header>
        </div>
    )
}

export default App