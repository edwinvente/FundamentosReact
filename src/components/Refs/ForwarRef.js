import React, {Component} from 'react'

const FancyInput = React.forwardRef((props, ref) => (
    <div>
        <h1>Pasar ref en las props a componente funcional</h1>
        <input 
            type="text"
            ref={ref}
        />
    </div>
))

class ForwarRef extends Component{
    
    entrada = React.createRef()

    componentDidMount(){
        console.log(this.entrada);
    }
    
    render(){
        return (
            <div>
                <FancyInput
                    ref={this.entrada}
                />
            </div>
        )
    }
}

export default ForwarRef