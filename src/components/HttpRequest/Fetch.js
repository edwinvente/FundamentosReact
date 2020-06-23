import React, {Component} from 'react'

class Http extends Component{

    state = {
        users:[],
        cargando: true
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').
            then(res => res.json()).
            then(users => this.setState({ users, cargando:false })).
            catch(error => {
                console.log('hay un error en la peticion http');
            })
    }

    render(){

        if (this.state.cargando) {
           return <h1>Cargando</h1>
        }

        return(
            <div>
                <h1>Peticions http con fetch</h1>
                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>
                            {user.name} <br />
                            <a href={`http://${user.website}`}>{user.website}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Http