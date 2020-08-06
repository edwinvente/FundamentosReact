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
            <h3>Ejemplo with resizes</h3>
        </div>
    )
}

const withResizes = (Comp) =>{
    return class extends Component{

        state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        
        componentWillMount(){
            window.addEventListener('resize', this.handleResize)
        }

        componentWillUnmount(){
            window.removeEventListener('resize', this.handleResize)
        }

        handleResize = () => {
            this.setState(state => ({
                width: window.innerWidth,
                height: window.innerHeight
            }))
        }

        render(){

            const {width, height} = this.state

            return(
                <Comp 
                    width={width}
                    height={height}
                />
            )
        }
    }
}

class App extends Component{
    render(){

        const {width, height} = this.props

        return(
            <div style={boxStyles}>
                <Header />
                <p>
                    width: {width}
                </p>

                <p>
                    height: {height}
                </p>
            </div>
        )
    }
}

export default withResizes(App)