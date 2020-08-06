import React from 'react'
import Header from '../HOOKS/Header'
import {Counter, Title, Button} from './Counter'

const App = () =>{
    return(
        <div>
            <Header title='Composición implicita' />
            <Counter>
                <Title />
                <Button type='increment' />
                <Title>
                    {(click) => (
                        <div style={{ color:'purple' }}>
                            <h1>{ click }</h1>
                        </div>
                    )}
                </Title>
                <Button type='decrement' />
            </Counter>
        </div>
    )
}

export default App