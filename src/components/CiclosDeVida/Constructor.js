import React, {Component} from 'react'

class Constructor extends Component{
    
    /* constructor(props){
        super(props)
    } */

    state = {
        num: this.props.num
    }

    title = React.createRef()

    aumentar = () =>{ 
        this.setState({
            num: this.state.num + 1
        })
    }
    
    render(){
        return(
            <div>
                <p ref={this.title}>
                    {this.state.message}
                </p>
                <button onClick={this.aumentar}>
                    Click ({this.state.num})
                </button>
            </div>
        )
    }
}

class App extends Component{
    render(){
        return(
            <div>
                <h1>Cosntructor</h1>
                <Constructor 
                    num={10}
                />
                <Constructor 
                    num={100}
                />
            </div>
        )
    }
}

export default App