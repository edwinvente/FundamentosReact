import React, { Component } from 'react'

const Unicorn = () => (
  <span role='img' aria-label='unicornio'>
    ○
  </span>
)

class InputNoControlado extends Component{
    
    name = React.createRef()
    email = React.createRef()

    handleClick = () => {
        const name = this.name.current.value
        const email = this.email.current.value

        //Manejo de datos
        this.props.onSend({name, email})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const name = e.target[0].value
        const email = e.target[1].value

        //Manejo de datos
        this.props.onSend({name, email})
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor='name'>Nombre:</label>   
                    <input 
                        type='text'
                        /* ref={this.name} */
                        placeholder='Nombres'
                        id='name' 
                    />
                </p>
                <input 
                    type='email'
                    /* ref={this.email} */
                    placeholder='Correo'
                />
                <button>
                    Enviar
                </button>
            </form>
        )
    }
}

class App extends Component{
    
    send = (props) => {
        console.log(props);
    }
    
    render(){
        return(
            <div>
                <h1>Inputs no controlados <Unicorn/></h1>
                <InputNoControlado 
                    onSend={this.send}
                />
            </div>
        )
    }
}

export default App