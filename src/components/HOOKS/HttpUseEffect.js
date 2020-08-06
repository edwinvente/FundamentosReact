import React, {useState, useEffect} from 'react'

const Header = () => {
    const styles = {
      background: 'linear-gradient(20deg, #6813cb, #2575fc)',
      textAlign: 'center',
      borderRadius: '0.2em',
      color: '#FFF',
      padding: '0.3em',
      margin: '0.3em',
      fontSize: '14px'
    }
  
    return (
      <header style={styles}>
        <h1>
          Hook useEffect Http
          <span
            role='img'
            aria-label='hook emoji'
          >
            ⚓
          </span> 
        </h1>
      </header>
    )
  }

const App = () =>{
    
    const [users, setUsers] = useState([])
    const [isFetchong, setFetch] = useState(true)

    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/users').
            then(res => res.json()).
            then(users => {
                setUsers(users)
                setFetch(false) 
            }).
            catch(err => {
                console.log(err)
            })

    }, [])
    
    return(
        <div>
            <Header />
            <p>
                {isFetchong && <h3>Cargando...</h3>}
            </p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default App