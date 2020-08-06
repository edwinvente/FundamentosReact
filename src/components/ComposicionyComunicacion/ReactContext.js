import React, {Component} from 'react'

//{Provider, Consumer}

const {Provider, Consumer} = React.createContext()

const boxStyles = {
    border:'1px solid gray',
    margin:'0.3em',
    padding:'0.3em',
    borderRadius:'0.3em',
    textAlign:'center'
}

const Header = () => {
    return(
        <div style={boxStyles}>
            <h1>React Context</h1>
        </div>
    )
}

const Nieto = () => (
    <Consumer>
        {({AddClick, clicks}) => (
            <div style={boxStyles}>
                <h4>Nieto</h4>
                <button onClick={AddClick}>
                    Clicks ({clicks})
                </button>
            </div>
        )}
    </Consumer>
)

class Hijo extends Component{
    render(){
        return(
            <div style={boxStyles}>
                <p>Hijo</p>
                <Nieto />
            </div>
        )
    }
}

class App extends Component{
    
    state = {
        clicks: 0
    }

    handleClick = () =>{
        this.setState(state => ({
            clicks: state.clicks + 1
        }))
    }
    
    render(){
        return(
            <Provider value={{ 
                clicks: this.state.clicks,
                AddClick: this.handleClick 
            }}
             >

                <div style={boxStyles}>
                    <Header />
                    <Hijo />
                </div>
            </Provider>
        )
    }
}

export default App