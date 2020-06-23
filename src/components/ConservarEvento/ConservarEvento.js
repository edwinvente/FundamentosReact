import React, { Component } from 'react'

export default class ConservarEvento extends Component{
    
    state = {
        color:'blue'
    }

    manejador = (e) =>{
        /* e.persist(); */
        const color = e.target.value

        this.setState({
            color
        })
        
    }
    
    render(){
        return(
            <div>
                <h1>Conservar evento React</h1>
                <input 
                    type="text"
                    onChange={this.manejador}
                />
                <h1 style={{ 
                    color:this.state.color
                 }}>
                     {this.state.color}
                </h1>
            </div>
        )
    }
}