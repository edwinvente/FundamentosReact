import React from 'react'
import Styled from 'styled-components'


const Header = Styled.header`
    background: tomato;
    text-align: center;
    border-radius:0.2em;
    color: #FFF;
    padding:0.3em;
    margin:0.3em;
    font-size: 14px;

    h1{
        color:green;
    }

    .big{
        font-size:20px;
        color:black;
    }

`

const App = () => {
    return(
        <div>
            <Header>    
                <h1>Styled Components</h1>
                <div className='big'>
                    Example Big
                </div>
            </Header>
        </div>
    )
}

export default App