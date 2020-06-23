import React, {Component} from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types';

const noop = () => { }

class Profile extends Component{
    
    static propTypes = {
        nombre: PropTypes.string.isRequired,
        email: PropTypes.string,
        bio: PropTypes.string,
        age: PropTypes.number
    }

    static defaultProps = {
        nombre:"Somos Creándola",
        onHello: noop
    }

    saluda = () => {
        this.props.onHello()
    }
    
    render(){

        const { nombre, email, bio } = this.props

        return(
            <div>
                <h1>{nombre}</h1>
                <p>{bio}</p>
                <a href={`mailto:${email}`}>
                    {email}
                </a>
                <button onClick={this.saluda}>
                    Click
                </button>
            </div>
        )
    }
}

/* Profile.defaultProps = {
    nombre:"Somos Creándola",
    onHello:noop
} */

/* Profile.propTypes = {} */


class Test extends Component {
   render(){
    return(
        <Profile 
            bio='Soy desarollador from con react'
            email='comercial@somoscreandola.com'
        />
    )
   }
}

export default Test