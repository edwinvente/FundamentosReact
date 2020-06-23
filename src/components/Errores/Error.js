import React, {Component} from 'react'

class Boton extends Component{
    
    state = {
        dispararError: false
    }

    dispatchError = () =>{
        this.setState({
            dispararError: true
        })
    }
    
    render(){

        if (this.state.dispararError) {
            throw new Error('Lo siento he fallado')
        }

        return(
            <button onClick={this.dispatchError}>
                Boton con Bugg
            </button>
        )
    }
}

class LimiteErrores extends Component{
    
    state = {
        tieneError: false
    }

    componentDidCatch(error, infoError){
        this.setState({
            tieneError: true,
            error
        })
    }
    
    render(){

        if (this.state.tieneError) {
            return(
                <div>
                    <p>
                        Ups! Algo ha salido mal, puedes recargar o contactar directamente con el equipo de soporte
                    </p>
                   <div>
                    {this.state.error && this.state.error.toString()}
                   </div>
                </div>
            )
        }

        return this.props.children
    }
}

class Error extends Component{
    render(){
        return(
            <div>
                <h1>Errores en React JSX</h1>
                <LimiteErrores>
                    <Boton />
                </LimiteErrores>
            </div>
        )
    }
}

export default Error