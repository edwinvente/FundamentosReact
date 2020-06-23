import React, { Component } from 'react'

class DifNativoSintetico extends Component{

    manejador = (e) =>{
        e.preventDefault()
        console.log(e.nativeEvent);
        
    }

    render(){
        return(
            <div>
                <h1>Diferencia ente componente nativo y sintetico</h1>
                <a 
                    href="https://somoscreandola.com"
                    onClick={this.manejador}
                >Somos Creándola</a>
            </div>
        )
    }
}

export default DifNativoSintetico