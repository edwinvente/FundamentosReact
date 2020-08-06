import React, {useState, useEffect} from 'react'
import Header from './Header'

const useFetch = (url, initialState = []) =>{
    const [data, setData] = useState(initialState)
    const [isFetching, setFetching] = useState(true)

    useEffect(() => {
        setFetching(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data)
            setFetching(false)
        })
        
    }, [url]);

    return [
        data,
        isFetching
    ]

}

const App = () =>{

    const [clicks, setCliks] = useState(1);

    const urlApi = 'https://jsonplaceholder.typicode.com/users'
    const urlApiUser = 'https://jsonplaceholder.typicode.com/users/' + clicks
    
    const [user, loading] = useFetch(urlApiUser)

    const add = () => setCliks(clicks + 1)

    return(
        <div>
            <Header title='Http hook personalizado' />
            { loading && <h1>Cargando...</h1> }
            <button onClick={add}>
                Siguiente
            </button>
            <strong> {clicks} </strong>
            <h2> {user.name} </h2>
            <span> {user.phone} </span>
            {/* <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul> */}
        </div>
    )
}

export default App