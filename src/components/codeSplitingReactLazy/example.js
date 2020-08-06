import React, {useState, lazy, Suspense} from 'react'
import { MoonLoader } from 'react-spinners'
//import Image from './Image'

//code splitting -  Importanción dinamica
const Image = lazy(() => import('./Image'))


const App = () =>{

    const [show, setShow] = useState(false);

    const toggle = () => setShow(!show)

    const styles = {
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'colum'
    }

    return(
        <div style={styles}>
            <h1>React Lazy</h1>
            <button onClick={toggle}>
                {show ? 'Ocultar' : 'Mostrar'}
            </button>
            { show && (
                <Suspense fallback={<MoonLoader color='green' />}>
                    <Image />
                </Suspense>
            )}
        </div>
    )
}

export default App