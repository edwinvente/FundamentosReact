import React from 'react'
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom'
import './app.css'

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
        <h1>Home</h1>
    )
}

const navStyles = {
    display:'flex',
    justifyContent: 'space-around'
}

const NavActive = { 
    color:'orangered'
}

const Naevgation = () => {
    return(
        <nav style={navStyles}>
            <NavLink 
                to='/' 
                exact 
                activeStyle={NavActive}
            >
                Home
            </NavLink>
            <NavLink 
                to='/productos' 
                activeStyle={NavActive}
                isActive={(match, location) => {
                    console.log(match)
                    if (!match) {
                        return false
                    }
                    return !match.isExact
                }}
            >
                Productos
            </NavLink>
            <NavLink to='/hola' activeClassName='navActive'>Hola</NavLink>
        </nav>
    )
}

const App = () =>{
    return(
    <BrowserRouter>
        <Naevgation />
        <Route exact path='/' component={Home} />
        <Route path='/hola' component={Hola} />
        <Route path='/productos/:id?' component={Products} />
    </BrowserRouter>
    )
}

export default App