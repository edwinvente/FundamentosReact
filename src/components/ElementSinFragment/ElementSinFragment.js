import React, {Component, Fragment} from 'react'

const Computacion = () => (
    <>
        <li>Monitor</li>
        <li>Mouse</li>
        <li>Teclado</li>   
    </>
)


const Ropa = () => (
    <>
        <li>Camiseta</li>
        <li>Sandalias</li>
        <li>Busos</li>
    </>
)


class ElementSinFragment extends Component{
    render(){
        return(
            <div>
                <Computacion />
                <Ropa />
            </div>
        )
    }
}

export default ElementSinFragment