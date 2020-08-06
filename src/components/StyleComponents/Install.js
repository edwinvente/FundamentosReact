import React from 'react'
import Styled from 'styled-components'
//import {colorPrincipal} from './colors'

//variable básica
const colorPrincipal = 'tomato'
//Constante completa
const paddingBasic = 'padding: 0.4em;'

//variables dinamicas
const getLinearGradient = (rot, color1, color2) => {
    return `background: linear-gradient(${rot}, ${color1}, ${color2});`
}

const Header = Styled.header`
    /* background: var(--colorPrincipal); */
    ${getLinearGradient('50deg', colorPrincipal, 'red')}
    text-align: center;
    border-radius:0.2em;
    color: #FFF;
    ${paddingBasic};
    /* padding:0.3em; */
    margin:0.3em;
    font-size: 14px;
`

const SubTitle = Styled.h2`
    color: ${colorPrincipal};
`

const App = () => {
    return(
        <div>
            <Header>    
                <h1>Styled Components</h1>
            </Header>
            <SubTitle>
                Example title
            </SubTitle>
        </div>
    )
}

export default App