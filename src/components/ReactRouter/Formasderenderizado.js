import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

const Hola = () => {
    return(
        <h1>Home</h1>
    )
}

const Products = () => {
    return(
        <h1>Products</h1>
    )
}

const Home = () => {
    return(
        <h1>Home principal</h1>
    )
}


const App = () =>{
    return(
    <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/hola' render={Hola} />
        <Route path='/productos'>
            {({match}) => {
                if (!match) return (
                    <div>
                        *** no /productos
                    </div>
                )
                return(
                    <Products />
                )
            }}
        </Route>
    </BrowserRouter>
    )
}

export default App