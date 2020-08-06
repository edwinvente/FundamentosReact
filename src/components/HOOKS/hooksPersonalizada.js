import React, {useState, useEffect, useDebugValue} from 'react'
import Header from './Header'

const useSizes = () => {
    const [width, setsWidth] = useState(window.innerWidth)
    const [height, setsHeight] = useState(window.innerHeight)

    useDebugValue('test')

    const handleSizes = () =>{
        setsWidth(window.innerWidth)
        setsHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleSizes)
        
        return () => {
            window.removeEventListener('resize', handleSizes)   
        }
    }, [width, height]);

    return {
        width, 
        height
    }
}

const App = () =>{
    
    const {width, height} = useSizes()
    
    return(
        <div>
            <Header title='Hooks Personalizados' />
            width: {width} | height:{height}
        </div>
    )
}

export default App