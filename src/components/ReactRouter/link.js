import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

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

const Home = (props) => {
    console.log(props)
    return(
        <h1>Home principal</h1>
    )
}

const navStiles = {
    display:'flex',
    justifyContent: 'space-around'
}

const Navegation = () => {
    return(
        <nav style={navStiles}>
            <Link to={{ 
                pathname:'/',
                search: '?ordenar=nombre',
                hash: '#hash-otro',
                state:{
                    name: 'Ninja pro',
                    age: 25
                }
             }}>Home</Link>
            <Link to='/productos'>Productos</Link>
            <Link to='/hola'>Hola</Link>
        </nav>
    )
}


const App = () =>{
    return(
    <BrowserRouter>
        <Navegation />
        <Route exact path='/' component={Home} />
        <Route path='/hola' render={Hola} />
        <Route path='/productos' render={Products}/>
    </BrowserRouter>
    )
}

export default App