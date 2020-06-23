import React, {Component} from 'react'

class EventoInput extends Component{
    
    state = {
        text:'',
        event: ''
    }

    manejador = (e) =>{
        console.log(e.target.value);

        this.setState({
            text: e.target.value,
            event: e.type
        })
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    onChange={this.manejador}
                    onCopy={this.manejador}
                    onPaste={this.manejador}
                />
                <h1>
                    {this.state.text}
                </h1>
                <h2>
                    {this.state.event}
                </h2>
            </div>
        )
    }
}

export default EventoInput