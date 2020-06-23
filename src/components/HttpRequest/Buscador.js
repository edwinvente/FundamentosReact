import React, { Component } from 'react'
import axios from 'axios'

class Formulario extends Component {

    handleSubmit = (e) => {
        this.props.onRequest(e)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                    />
                    <button>
                        Buscar
                    </button>
                </form>
            </div>
        )
    }
}

class Buscador extends Component {

    state = {
        movie: {},
        status: false,
        title: 'Buscador de peliculas'
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const movie = event.target[0].value
        const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=c646b5e7'

        const res = await fetch(url + '&t=' + movie)
        const title = await res.json()

        this.setState({ 
            movie:title, 
            status: true 
        })


        /* axios.get(url, {
            params: {
                t:movie
            }
        }).
            then(res => this.setState({ 
                movie:res.data, 
                status: true 
            })).
            catch(err => {
                console.log('error en las rutas de la api: ' + err)
            }) */

        /* fetch(url + '&t=' + movie).
            then(res => res.json()).
            then(movie => this.setState({ movie, status: true })).
            catch(err => {
                console.log('error en las rutas de la api: ' + err)
            }) */

    }

    render() {

        const { movie } = this.state

        if (movie.Response == 'False') {
            const title = 'Pelicula no encontrada!!!'

            return (
                <div>
                    <h1>{title}</h1>
                    <Formulario
                        onRequest={this.handleSubmit}
                    />
                    <p>No hay peliculas que coicidan</p>
                </div>
            )
        }

        return (
            <div>
                <h1>{this.state.title}</h1>
                <Formulario
                    onRequest={this.handleSubmit}
                />
                {movie.Title ? (
                    <h3>
                        Pelicula encontrada:
                    </h3>
                ):
                    <h3>Escribe el nombre de la pelicula que buscas</h3>
                }
                {this.state.status &&
                    <div>
                        <h2>
                            {movie.Title}
                        </h2>
                        <p>
                            {movie.Plot}
                        </p>
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                        />
                        <p>
                            Tiempo de duración: {movie.Runtime}
                        </p>
                    </div>
                }
            </div>
        )
    }
}

export default Buscador