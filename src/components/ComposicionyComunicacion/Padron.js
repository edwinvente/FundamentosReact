import React, {Component} from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types';

const boxStyles = {
    border:'1px solid gray',
    margin:'0.3em',
    padding:'0.3em',
    borderRadius:'0.3em',
    textAlign:'center'
}

const Header = () => (
    <div>
        <h1>Padron Render Props</h1>
    </div>
)

class Resize extends Component{

    static propTypes = {
        render: PropTypes.func.isRequired
    }
    
    state = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize)
    }

    componentWillMount(){
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize  = () =>{
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    
    render(){

        const { width, height } = this.state
        const { render } = this.props

        return render({ width, height })
    }
}

class App extends Component{
    render(){
        return(
            <div style={boxStyles}>
                <Header />
                <Resize 
                    render={(data) => {

                        const {width} = data

                        return(
                            <div>
                                width: {width}
                            </div>
                        )
                    }}
                /> 
            </div>
        )
    }
}

export default App