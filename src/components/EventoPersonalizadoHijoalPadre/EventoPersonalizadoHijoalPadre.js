import React, { Component } from 'react'
import './EventoPersonalizadoHijoalPadre.css'

class Hijo extends Component{
    
    manejadorClick = () =>{
        this.props.onSaluda('Developer Ninja in React')
    }
    
    render(){
        return(
            <div className="box blue">
                <h2>Componente Hijo</h2>
                <button
                    onClick={this.manejadorClick}
                >
                    Saluda
                </button>
            </div>
        )
    }
}

export default class Padre extends Component{
    
    state = {
        data: ''
    }
    
    manejador = (data) =>{
        this.setState({ data })
    }
    
    render(){
        return(
            <div className="box red">
                <h1>Eventos personalizados, pasando del hijo al padre en las props</h1>
                <Hijo
                    onSaluda={this.manejador}
                />
                <p>
                    Datos del hijo: {this.state.data}
                </p>
            </div>
        )
    }
}