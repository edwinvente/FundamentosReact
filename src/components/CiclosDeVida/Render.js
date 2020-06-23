import React, {Component} from 'react'

const lista = (
    <ul>
        <li>Fresa</li>
        <li>Mango</li>
        <li>Banano</li>
        <li>Melon</li>
    </ul>
)

class App extends Component{
    render(){
        return(
            <div>
                <h1>Method Render</h1>
                {lista}
            </div>
        )
    }
}

export default App