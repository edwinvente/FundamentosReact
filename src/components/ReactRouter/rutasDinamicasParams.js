import React from 'react'
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom'
import queryString from 'query-string'
import './app.css'

const Hola = () => {
    return(
        <h1>Home</h1>
    )
}

const Products = (props) => {
    /* debugger */
    return(
        <div>
            <h1>Products</h1>
            <Link to='/productos/gamers'>Gamers</Link>
            <Link to='/productos/hogar'>Hogar</Link>
        </div>
    )
}

const Home = () => {
    return(
        <h1>Home</h1>
    )
}

const ProductsCategoria = ({match}) => {
    console.log(match)
    return(
        <div>
            <h1>Categoria {match.params.categoria} </h1>
        </div>
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
                    //console.log(match)
                    if (!match) {
                        return false
                    }
                    return !match.isExact
                }}
            >
                Productos
            </NavLink>
            <NavLink to='/hola' activeClassName='navActive'>Hola</NavLink>
            <NavLink to='/ropa' activeClassName='navActive'>Ropa</NavLink>
        </nav>
    )
}

const Ropa = ({location}) => {
    console.log(location)
    //const query = new URLSearchParams(location.search)
    const {color, talla} = queryString.parse(location.search)
    /* const color = query.get('color')
    const talla = query.get('talla') */

    return(
        <div>
            <h1>Ropa</h1>
            <div>
                Color: {color}
            </div>
            <div>
                Talla: {talla}
            </div>
        </div>
    )
}

const App = () =>{
    return(
    <BrowserRouter>
        <Naevgation />
        <Route exact path='/' component={Home} />
        <Route path='/hola' component={Hola} />
        <Route path='/productos' exact component={Products} />
        <Route path='/productos/:categoria/:id?' component={ProductsCategoria} />
        <Route path='/ropa' component={Ropa} />
    </BrowserRouter>
    )
}

export default App