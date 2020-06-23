import React, { Component } from 'react'

class Input extends Component {

    state = {
        text: '',
        tieneError: false,
        color: '#E8E8E8'
    }

    actualzar = (event) => {
        const text = event.target.value
        let color = 'green'
        
        if (text.trim() === '') {
            color = '#E8E8E8'
        }

        if (text.trim() !== '' && text.trim().length < 5) {
            color = 'red'
        }

        this.setState({ text, color })

        //pasar las props al padre
        this.props.onChange(this.props.name, text)
    }

    render() {

        const styles = {
            border: `1px solid ${this.state.color}`,
            padding: '0.3em 0.6em',
            outline: 'none'
        }

        return (
            <div>
                <input
                    type='text'
                    value={this.state.text}
                    onChange={this.actualzar}
                    style={styles}
                    placeholder={this.props.placeholder}
                />
            </div>
        )
    }
}

class InputControlado extends Component {
    
    state = {
        name:'',
        email:''
    }

    handleChange = (name, text) =>{
        this.setState({
            [name]: text
        })
        console.log(text);
    }
    
    render() {
        return (
            <div>
                <h1>Inputs controlados</h1>
                <Input 
                    onChange={this.handleChange}
                    name='name'
                    placeholder='Nombre Completo!'
                />

                <Input 
                    onChange={this.handleChange}
                    name='email'
                    placeholder='Tu Email!'
                />

                <h2>
                    Nombre: {this.state.name}
                </h2>

                <h2>
                    Email: {this.state.email}
                </h2>

            </div>
        )
    }
}

export default InputControlado