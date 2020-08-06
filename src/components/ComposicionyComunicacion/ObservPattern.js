import React, {Component} from 'react'
import PubSub from 'pubsub-js'

const Header = () => {
    const subtitleStyles = {
      fontWeight: 'bold'
    }
  
    const headerStyles  = {
      margin: '0.6em',
      borderRadius: '0.3em',
      border: '1px solid #d2d2d2',
      padding: '2em 0.4em',
      fontFamily: 'monospace',
      fontSize: '17px',
      textAlign: 'center'
    }
  
    return (
      <header style={headerStyles}>
        <div>
          ( Hermanos )
        </div>
        <div style={subtitleStyles}>
          Parent Component
          <span role='img' aria-label='flame' >
            🔥
          </span>
        </div>
      </header>
    )
  }
  

const styles = {
    padding: '0.5em',
    margin:'0.5em',
    border: '1px solid gray',
    borderRadius:'0.3em',
    textAlign:'center'
}


class Bisnieto extends Component{
    
    state = {
        message:'*******'
    }

    componentDidMount(){
        PubSub.subscribe('otro evento', (e, data) =>{
            this.setState(state =>({
                message: data.title
            }))
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe('otro evento')
    }

    handleClick = () => {
        PubSub.publish('saludo', 'Hello from bisnieto')
    }
    
    render(){
        return(
            <div style={styles}>
                <h2>Bisnieto</h2>
                <p>
                    {this.state.message}
                </p>
                <button onClick={this.handleClick}>
                    click
                </button>
            </div>
        )
    }
}

class Nieto extends Component{
    render(){
        return(
            <div style={styles}>
                <h2>Nieto</h2>
                <Bisnieto />
            </div>
        )
    }
}

class Hijo extends Component{
    render(){
        return(
            <div style={styles}>
                <h2>Hijo</h2>
                <Nieto />
            </div>
        )
    }
}

class Padre extends Component{
    render(){
        return(
            <div style={styles}>
                <h2>Padre</h2>
                <Hijo />
            </div>
        )
    }
}


class App extends Component{
    
    componentDidMount(){
        PubSub.subscribe('saludo', (e, data) =>{
            alert(data)
        })
    }
    
    handleClick = () => {
        PubSub.publish('otro evento', {
            title:'Hello from <App />'
        })
    }

    render(){
        return(
            <div style={styles}>
                <button onClick={this.handleClick}>
                    App
                </button>
                <Header />
                <Padre />
            </div>
        )
    }
}

export default App