import React from 'react'
import Acordion from './AcordionComponent'

const App =() =>{
    return(
        <div>
            <Acordion
                title='Ejemplo de acordion'
                content='Lrem ipsum...'
            />
            <Acordion
                title='Porque universidad react'
                content='El curso más completo de react de los ultimos 2 años aproximadamente, un curso que nos es tan funcional sino más bien practico, basado en la contextualización de elementos y más...'
                bgColor='#000'
            />
            <Acordion
                title='Developer ninja en react, fontend'
                content='Voy a ser el mejor en react y react native'
                bgColor='orangered'
            />
        </div>
    )
}

export default App