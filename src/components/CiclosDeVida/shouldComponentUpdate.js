import React, {Component} from 'react'

class Contador extends Component{
    
    state = {
        num: 0
    }

    shouldComponentUpdate(nextProps, nextState){
        if (nextState.num <= 5) {
            return true    
        }
        return false
    }

    handleCounter = () =>{
        this.setState({
            num: this.state.num + 1
        })
    }
    
    render(){
        return(
            <div>
                <button onClick={this.handleCounter}>
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
                <h1>shouldComponentUpdate</h1>
                <Contador />
            </div>
        )
    }
}

export default App