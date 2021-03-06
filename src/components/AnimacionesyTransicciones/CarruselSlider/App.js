import React from 'react'
import Carrusel from './Carrusel'

const App = () =>{
    return(
        <div>
            <Carrusel 
                images={[
                    'https://images.pexels.com/photos/2059661/pexels-photo-2059661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          'https://images.pexels.com/photos/2108373/pexels-photo-2108373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          'https://images.pexels.com/photos/2250619/pexels-photo-2250619.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                ]} 
            />
        </div>
    )
}

export default App