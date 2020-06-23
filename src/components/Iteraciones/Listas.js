import React, {Component} from 'react'

const frutras = [
    'Mango',
    'Pera',
    'Papaya',
    'Mora',
    'Fresa',
    'Manzana',
    'Kiwi'
]

export default class Listas extends Component{
    render(){
        return(
            <div>
                <ul>
                    {frutras.map((fruta, i) => {
                        return(
                            <li key={i}>
                                {fruta}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}