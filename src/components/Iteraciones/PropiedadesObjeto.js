import React, {Component} from 'react'

class PropiedadObjeto extends Component{
    
    state = {
        user:{
            name:'Edwin Caicedo',
            age:28,
            job:'web developer full stack',
            country:'Colombia'
        }
    }

    render(){

        const {user} = this.state

        const keys = Object.keys(user)

        return(
            <div>
                <ul>
                    {keys.map((key, i) =>(
                        <li key={i}>
                            <strong>{key}</strong>- {user[key]}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default PropiedadObjeto