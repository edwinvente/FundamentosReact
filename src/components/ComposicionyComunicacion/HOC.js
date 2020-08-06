import React, {Component} from 'react'

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
            <h1>HOC</h1>
            <h3>High Order Component</h3>
        </div>
    )
}

const withCounter = (Comp) =>{
    return (config) => class extends Component{
        
        state = {
            num: config.clicks
        }

        add = () =>{
            this.setState(state =>({
                num: state.num + config.sumClicks
            }))
        }

        render(){
            return(
                <Comp 
                    num={this.state.num}
                    add={this.add}
                />
            )
        }
    }
}

class App extends Component{
    render(){

        const {num, add} = this.props

        return(
            <div style={boxStyles}>
                <Header />
                <p>
                    {num}
                </p>
                <button onClick={add}>
                    Sumar
                </button>
            </div>
        )
    }
}

export default withCounter(App)({
    clicks:10,
    sumClicks:3
})