import React, {Component} from 'react'

class Contador extends Component{
    
    state = {
        num: this.props.num
    }

    static getDerivedStateFromProps(nextProps, prevState){
        /* if (prevState.num !== nextProps.num) {
            return {
                num:nextProps.num
            }
        } */

        if (prevState.num < nextProps.num) {
            return {
                num:nextProps.num
            }   
        }

    }

    handleContador = () =>{
        this.setState({
            num: this.state.num + 1
        })
    }
    
    render(){

        const { num } = this.state

        return(
            <div>
                <hr />
                <button onClick={this.handleContador}>
                    Contador ({num})
                </button>
            </div>
        )
    }
}

class App extends Component{

    state = {
        numero:0
    }

    manejador = (e) => {
        let numero = parseInt(e.target.value)
        
        if (isNaN(numero)) {
            numero = 0
        }
        
        this.setState({
            numero
        })
    }

    render(){

        const { numero } = this.state

        return(
            <div>
                <h1>getDeliverfyStateFromProps</h1>
                <h3>Numero: {numero} </h3>
                <input 
                    type='text'
                    onChange={this.manejador} 
                />
                <Contador 
                    num={numero}
                />
            </div>
        )
    }
}

export default App