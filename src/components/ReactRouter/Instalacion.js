import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

const Hola = () => {
    return(
        <h1>Hola</h1>
    )
}

const Products = () => {
    return(
        <h1>Products</h1>
    )
}

const App = () =>{
    return(
    <BrowserRouter>
        <Route 
            path='/hola' 
            component={Hola} 
        />
        <section>
            <Route 
                path='/productos' 
                component={Products} 
            />
        </section>
        <div>
            <Route 
                path='/productos' 
                component={Products} 
            />
        </div>
    </BrowserRouter>
    )
}

export default App