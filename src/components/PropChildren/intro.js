import React, {useState} from 'react'
import Header from '../HOOKS/Header'
import './Global.css'

const Paretn = ({children: ch}) =>{
    
    /* const children = React.Children.map(ch, (child, index) => {
        if (index === 0) {
            console.log(child)
            return child   
        }
        return child
    }) */

    /* const children = React.Children.forEach(ch, (child, index) => {
        console.log(child)
        return child
    }) */

    const childrenArray = React.Children.toArray(ch)

    const children = childrenArray.map((item, index) => (
        <li key={index}>
            {item}
        </li>
    ))
    
    return (
        <div className='box'>
            <div className='blue'>
                {children}
            </div>
        </div>
    )
}

const App = () =>{
    return(
        <div>
            <Header title='props Children Introducción' />
            <Paretn>
                <span>Mango</span>
                
                {/* {`Hijo 
                    de 
                    texto`}
                <div>Element</div>
                {() => {}}
                {444}
                {`la suma es: ${5 + 5}`} */}
            </Paretn>
        </div>
    )
} 

export default App