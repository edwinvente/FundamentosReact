import React, {Component} from 'react'
import axios from 'axios'

class Http extends Component{
    
    state = {
        pothos:[]
    }

    componentDidMount(){
        
        /* fetch('https://jsonplaceholder.typicode.com/photos').
            then(res => res.json()).
            then(pothos => this.setState({pothos})).
            catch(err => {
                console.log('Hay un error http');
            }) */
        
        /* axios.get('https://jsonplaceholder.typicode.com/photos').
            then(res => {
                this.setState({pothos: res.data}) 
            }) */ 
    }
    
    render(){

        const {pothos} = this.state

        return(
            <div>
                {pothos.map((photo) => (
                    <img 
                        key={photo.id}
                        src={photo.thumbnailUrl}
                        alt={photo.title}
                    />
                ))}
            </div>
        )
    }
}

class Events extends Component{
    
    state = {
        width: window.innerWidth
    }
    
    componentDidMount(){
        window.addEventListener('resize', this.handleResize)
    }

    handleResize = () =>{
        console.log(window.innerWidth)
        this.setState({
            width: window.innerWidth
        })
    }
    
    render(){
        return(
            <div>
                <h2>Events</h2>
                <p>
                    Ancho de la pantalla: {this.state.width}
                </p>
            </div>
        )
    }
}

class App extends Component{
    render(){
        return(
            <div>
                <h1>ComponentDidMount life cycle</h1>
                <Http />
                <Events />
            </div>
        )
    }
}

export default App