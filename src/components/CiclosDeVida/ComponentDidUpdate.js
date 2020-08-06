import React, { Component } from 'react'
import axios from 'axios'

class User extends Component {

    state = {
        user: {},
        isFetching: false
    }

    componentDidMount() {
        this.userData()
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, this.props);
        if (prevProps.userId !== this.props.userId) {
            this.userData()
        }
    }

    userData = () => {

        this.setState({
            isFetching: true
        })

        const URL = 'https://jsonplaceholder.typicode.com/users/' + this.props.userId
        axios.get(URL).
            then(res => this.setState({
                user: res.data,
                isFetching: false
            })).
            catch(err => {
                console.log('No hay usuarios encontrados')
            })
    }

    render() {
        return (
            <div>
                {this.state.isFetching
                    ? (<p>Loading...</p>)
                    : (<pre>
                        {JSON.stringify(this.state.user, null, 4)}
                    </pre>)
                }
            </div>
        )
    }
}

class App extends Component {

    state = {
        id: 1
    }

    handleAdd = () => {
        this.setState({
            id: this.state.id + 1
        })
    }

    render() {

        const { id } = this.state

        return (
            <div>
                <h1>Usuario con id: {this.state.id} </h1>
                <User
                    userId={id}
                />
                <button onClick={this.handleAdd}>
                    Aumentar
                </button>
            </div>
        )
    }
}

export default App