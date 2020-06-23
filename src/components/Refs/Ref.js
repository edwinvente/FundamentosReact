import React, {Component} from 'react'

class Entrada extends Component{

    entrada = React.createRef() 

    //se ejecuta automaticamente cuando se monta o crea el componente
    componentDidMount(){
        this.focus()
    }

    focus = () => {
        this.entrada.current.focus()
    }
    blur  = () => {
        this.entrada.current.blur()
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.entrada} />
                <button onClick={this.focus}>
                    Focus
                </button>
                <button onClick={this.blur}>
                    Blur
                </button>
            </div>
        )
    }
}

class Ref extends Component{

    render(){
        return(
            <div>
                <h1>Manejo de las refs</h1>
                <Entrada />
            </div>
        )
    }
}

export default Ref