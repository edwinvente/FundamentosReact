import React, {Component} from 'react'

class DevTools extends Component{

    state = {
        planes:{
            'peliculas': [
                'Batman vs Superman',
                'Gran Torino',
                'Huye'
            ]
        },
        conuter:0
    }


    handleAdd = () => {
        this.setState({
            conuter: this.state.conuter + 1
        })
    }

    handleLess = () => {
        this.setState({
            conuter: this.state.conuter - 1
        })
    }

    render(){
        return(
            <div>
                <h1>DevTools #{this.state.conuter} </h1>
                <button
                    onClick={this.handleAdd}
                >Aumentar
                </button>
                <button
                    onClick={this.handleLess}    
                >Disminuir
                </button>

                <h3>Movies for this night</h3>
                <ul>
                    {this.state.planes.peliculas.map((movie, i) => (
                        <li key={i + movie}>
                            {movie}
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}

export default DevTools